# Porrtal Recipe - Nx OpenAPI NextJS Strapi

This recipe will show you the steps to create a Porrtal NextJS Strapi application using Nx (https://nx.dev).

## Create the Strapi Project

Please see [Strapi Project Setup](StrapiSetup.md)

## Create the Nx Project

To create an Nx project, you use a command like this:

```
npx create-nx-workspace@latest [project-name] --preset=next --appName=[app-name] --style=[style] --routing
```

* `[project-name]`: Replace this with your desired project name.
* `--preset=next`: Specifies that the project will use Next.js.
* `--appName=[app-name]`: Replace `[app-name]` with the name of your Next.js application.
* `--style=[style]`: Choose the stylesheet format (css, scss, styl, less).

For this recipe, we will use the following command:

```
npx create-nx-workspace@latest my-workspace --preset=next --appName=my-app --style=scss
```

Questions are answered as follows:

* `App Router`: yes
* `Test Runner for E2E Tests`: cypress
* `Enable Distributed Caching`: no

NOTE: This command takes awhile to run.

## Navigate to the Nx project

```
cd my-workspace
```

## Run the App

```
nx serve my-app
```

# Get Basic Porrtal Running

## Add Porrtal Packages

```
npm install @blueprintjs/core@4.5.1 @blueprintjs/icons@4.16.0 @blueprintjs/popover2@1.4.1 @porrtal/r-api @porrtal/r-shell @porrtal/r-shell-blueprint @porrtal/r-split @porrtal/r-user ag-grid-community ag-grid-react uuid react-measure --save --legacy-peer-deps

npm install @types/uuid @types/react-measure --save-dev --legacy-peer-deps
```

## Create Library

```
nx g @nx/react:library --name=my-lib --unitTestRunner=jest --bundler=rollup --directory=libs/my-scope/my-lib --importPath=@my-scope/my-lib --projectNameAndRootFormat=as-provided
```

Questions answerd as follows:

* `stylesheet format`: scss

## Create Components

```
nx g @nx/react:component --name=nav --directory=libs/my-scope/my-lib/src/lib/nav --export=true --nameAndDirectoryFormat=as-provided
nx g @nx/react:component --name=main1 --directory=libs/my-scope/my-lib/src/lib/main1 --export=true --nameAndDirectoryFormat=as-provided
nx g @nx/react:component --name=main2 --directory=libs/my-scope/my-lib/src/lib/main2 --export=true --nameAndDirectoryFormat=as-provided
```

Questions answerd as follows:

* `stylesheet format`: scss

## Add Wrapper to App

Create a file `apps/my-app/app/Wrapper.tsx` with this code:

```tsx
'use client'

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { View } from '@porrtal/r-api';
import { BannerData, ShellState } from '@porrtal/r-shell';
import { ShellBlueprint } from '@porrtal/r-shell-blueprint';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import { useEffect, useState } from 'react';

export default function Wrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const porrtalViews: View[] = [
    {
      key: 'Nav',
      launchAtStartup: true,
      displayText: 'Nav',
      paneType: 'nav',
      displayIcon: 'updated',
      componentName: 'Nav',
      componentModule: () => import('@my-scope/my-lib'),
    },
    {
      key: 'Main1',
      launchAtStartup: true,
      displayText: 'Main1',
      paneType: 'main',
      displayIcon: 'updated',
      componentName: 'Main1',
      componentModule: () => import('@my-scope/my-lib'),
    },
    {
      key: 'Main2',
      launchAtStartup: true,
      displayText: 'Main2',
      paneType: 'main',
      displayIcon: 'updated',
      componentName: 'Main2',
      componentModule: () => import('@my-scope/my-lib'),
    },
    {
      viewId: 'shell-state-dashboard',
      paneType: 'bottom',
      launchAtStartup: false,
      componentName: 'ShellStateDashboard',
      componentModule: () => import('@porrtal/r-shell-blueprint'),
      key: 'shell-state-dashboard',
      displayText: 'Shell State Dashboard',
      displayIcon: 'key',
    },
  ];
  const porrtalBanner: BannerData = {
    // uncomment and edit this code if you would like a banner image
    // bannerImageUrl: './assets/my-banner.png',
    // bannerImageHeight: 63,
    // bannerImageWidth: 500,
    displayText: 'My App',
    displayIcon: 'build',
    childData: [],
  };

  return (
    <div>
      {isClient ? (
        <ShellState views={porrtalViews}>
          <ShellBlueprint bannerData={porrtalBanner} />
        </ShellState>
      ) : (
        <div />
      )}
    </div>
  );
}
```
## Update page.tsx

Update the file `apps/my-app/app/page.tsx`:

```tsx
import Wrapper from "./Wrapper";

export default async function Index() {
  return (<Wrapper />);
}
```

# Add Strapi Authentication to Porrtal App

The rest of the recipe assumes that you followed the instructions here [Strapi Project Setup](StrapiSetup.md) and that you have Strapi running on the default port `http://localhost:1337`.

## Install @porrtal/r-user-strapi Library

From the `my-workspace` folder, install the porrtal React library for Strapi:

```
npm install @porrtal/r-user-strapi --save --legacy-peer-deps
```

## Update Wrapper.tsx with Strapi Authentication

```tsx
        <ShellState views={porrtalViews}>
          <StrapiAuthentication
            strapiUri="http://localhost:1337"
            allowRegistration={true}
          >
            <ShellBlueprint bannerData={porrtalBanner} />
          </StrapiAuthentication>
        </ShellState>
```

You should now see the Strapi login / logout button and user info in the banner.

# Integrate Strapi REST API into Porrtal App

We will create a library and fill it with generated "proxy" code that wraps the Strapi REST API.

Use of the strongly-typed proxy code simplifies accessing the Strapi REST API and can help avoid programming errors.

## Add Library For Strapi REST API Proxy

```
nx g @nx/react:library --name=my-strapi-proxy --unitTestRunner=jest --bundler=rollup --directory=libs/my-scope/my-strapi-proxy --importPath=@my-scope/my-strapi-proxy --projectNameAndRootFormat=as-provided
```

Questions answerd as follows:

* `stylesheet format`: scss

## Copy Strapi OpenAPI JSON File

Assuming you used the default "my-project" location in the [Strapi Project Setup](StrapiSetup.md), copy the Strapi OpenAPI JSON file to the library.

```
cp ../my-project/src/extensions/documentation/documentation/1.0.0/full_documentation.json ./libs/my-scope/my-strapi-proxy/src/
```

## Install OpenAPI Code Generator

Please follow the instructions to install `openapi-generator` on your development workstation.
https://openapi-generator.tech/docs/installation/

If you are on a Mac, it can be installed using [homebrew](https://brew.sh/) like this:

```
brew install openapi-generator
```

## Run OpenAPI Code Generator

```
export TS_POST_PROCESS_FILE="/usr/local/bin/prettier --write"
	
openapi-generator generate -i ./libs/my-scope/my-strapi-proxy/src/full_documentation.json -o ./libs/my-scope/my-strapi-proxy/src/lib -g typescript-axios --skip-validate-spec
```

You can choose to edit the JSON file to remove the errors.  This will allow you to remove the `--skip-validate-spec` flag from the above command.

## Instal @porrtal/r-user-axios

The `@porrtal/r-user-axios` package provides support for REST API authentication by adding the access token to outgoing REST API http calls.

```
npm install @porrtal/r-user-axios --save --legacy-peer-deps
```

## Update Wrapper.tsx with AxiosProxy Configuration

## Update Main2.tsx to Use Strapi REST API


