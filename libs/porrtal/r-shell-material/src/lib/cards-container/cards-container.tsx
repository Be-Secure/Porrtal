/*
Copyright 2023 Comcast Cable Communications Management, LLC

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

import { Card } from '@mui/material';
import { StateObject } from '@porrtal/r-api';
import { ComponentType } from 'react';
import styles from './cards-container.module.scss';

export interface CardMeta {
  key: string;
  data: StateObject;
  component: ComponentType<CardContainerProps>;
}

export interface CardsContainerProps {
  cards: CardMeta[];
}

export interface CardContainerProps {
  card: CardMeta;
}

export function CardsContainer(props: CardsContainerProps) {
  return (
    <div className={styles['container-container']}>
      <div className={styles['cards-container']}>
        {props.cards.map((card) => (
          <CardContainer key={card.key} card={card} />
        ))}
      </div>
    </div>
  );
}

export function CardContainer(props: CardContainerProps) {
  return (
    <Card key={props.card.key} className={styles['card-container']}>
      <props.card.component card={props.card} />
    </Card>
  );
}
