import { View } from '@porrtal/r-api';

export const docsNavViews: View[] = [
  {
    viewId: 'Welcome',
    displayText: 'Welcome !!',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewerComponent',
    paneType: 'main',
    launchAtStartup: true,
    componentModule: () => import('@porrtal-components/a-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-a-quick-start-material/welcome/welcome.md',
    },
  },
  {
    viewId: 'Setup Your Workstation',
    displayText: 'Setup Your Workstation',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewerComponent',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/a-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-a-quick-start-material/setup-your-workstation/setup-your-workstation.md',
    },
  },
  {
    viewId: 'Create the App',
    displayText: 'Create the App',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewerComponent',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/a-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-a-quick-start-material/create-the-app/create-the-app.md',
    },
  },
  {
    viewId: 'Create the Nav Component',
    displayText: 'Create the Nav Componet',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewerComponent',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/a-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-a-quick-start-material/create-the-nav-component/create-the-nav-component.md',
    },
  },
  {
    viewId: 'Launch a Component',
    displayText: 'Launch a Component',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewerComponent',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/a-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-a-quick-start-material/launch-a-component/launch-a-component.md',
    },
  },
  {
    viewId: 'Create an Entity Menu',
    displayText: 'Create an Entity Menu',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewerComponent',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/a-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-a-quick-start-material/create-an-entity-menu/create-an-entity-menu.md',
    },
  },
  {
    viewId: 'Create a Search Component',
    displayText: 'Create a Search Component',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewerComponent',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/a-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-a-quick-start-material/create-a-search-component/create-a-search-component.md',
    },
  },
  {
    viewId: 'Next Steps',
    displayText: 'Next Steps',
    displayIcon: 'auto_awesome',
    componentName: 'MarkdownViewerComponent',
    paneType: 'main',
    componentModule: () => import('@porrtal-components/a-learning'),
    state: {
      contentUrl:
        '/docs/porrtal-components-a-quick-start-material/next-steps/next-steps.md',
    },
  },
];
