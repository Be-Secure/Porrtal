/*
Copyright 2022 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { StateObject } from "@porrtal/r-api";
import { useShellState } from "@porrtal/r-shell";
import { useAuthZsState } from "@porrtal/r-user";
import { useAuthN } from "@porrtal/r-user";
import { useEffect, useState } from "react";
import { CardMeta, CardsContainer } from "../cards-container/cards-container";

export function ShellStateDashboard() {
    const authNInfo = useAuthN();
    const shellState = useShellState();
    const authZsState = useAuthZsState();
    const [cards, setCards] = useState<CardMeta[]>([]);
    const [authZCards, setAuthZCards] = useState<CardMeta[]>([]);

    console.log('shell state dashboard', {authZsState});

    useEffect(() => {

        const cardList = [
            {
                key: 'auth-n-card',
                component: () => import('./auth-n-card/auth-n-card'),
                data: authNInfo as unknown as StateObject
            },
            {
                key: 'views-card',
                component: () => import('./views-card/views-card'),
                data: { myData: 'hello there :)'}
            },
            {
                key: 'panes-card',
                component: () => import('./panes-card/panes-card'),
                data: { myData: 'hello there :)'}
            },
            {
                key: 'orphan-views-card',
                component: () => import('./orphan-views-card/orphan-views-card'),
                data: { myData: 'hello there :)'}
            },
        ];
        
        console.log('shell state dashboard - setting cards', {cardList});

        setCards(cardList);
    }, [authNInfo]);

    useEffect(() => {

        const cardList = [
            ...Object.keys(authZsState).map(name => ({
                key: name,
                component: () => import('./auth-z-card/auth-z-card'),
                data: authZsState[name] as unknown as StateObject
            }))
        ];
        
        console.log('shell state dashboard - setting cards', {authZsState, cardList});

        setAuthZCards(cardList);
    }, [authZsState]);

    return (
        <CardsContainer cards={[...cards, ...authZCards]}></CardsContainer>
    );
}