import React from 'react';

import { Cell } from 'components/cell/Cell';
import styles from './styles.module.scss';
import { labels } from './labels';

const [sun, mon, tue, wed, thu, fri, sat] = labels.map(i => i.slice(0, 3));
const weekDaysLabels = [mon, tue, wed, thu, fri, sat, sun];

export const WeekDays: React.FC = () => {
  return (
    <div className={styles.root}>
      {weekDaysLabels.map(label => (
        <Cell key={label} className={styles.day}>
          {label}
        </Cell>
      ))}
    </div>
  );
};
