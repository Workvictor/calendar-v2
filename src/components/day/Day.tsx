import React from 'react';

import styles from './styles.module.scss';
import { ClassName } from 'types';
import { classJoin } from 'utils/classJoin';
import { Cell } from 'components/cell/Cell';

export interface DayAction {
  onDayClick?(date: Date): void;
}

interface DayProps {
  date: Date;
  month: number;
}

const HOLIDAYS = [0, 6];

export const Day: React.FC<ClassName & DayProps & DayAction> = props => {
  const { className, month, date, onDayClick } = props;

  function onClick() {
    if (onDayClick) {
      onDayClick(date);
    }
  }

  const isHoliday = HOLIDAYS.includes(date.getDay()) && styles.isHoliday;

  const isOutOfMonth = month !== date.getMonth() && styles.isOutOfMonth;

  const classNames = classJoin(styles.root, isHoliday, isOutOfMonth, className);

  return (
    <Cell onClick={onClick} className={classNames}>
      {date.getDate()}
    </Cell>
  );
};
