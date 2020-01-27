import React from 'react';

import styles from './styles.module.scss';
import { WeekDays } from 'components/weekDays/WeekDays';
import { Row } from 'components/row/Row';
import { Cells, WEEKS_COUNT, WEEK_DAYS_COUNT } from 'components/cells/Cells';
import { DayAction } from 'components/day/Day';

interface Props {
  year: number;
  month: number;
}

const DAYS_COUNT = WEEKS_COUNT * WEEK_DAYS_COUNT;

const WEEK_DAYS_MAP = [5, -1, 0, 1, 2, 3, 4];

export const Grid: React.FC<Props & DayAction> = props => {
  const { year, month, onDayClick } = props;

  const days: Date[] = [];
  const weekEndOffset = WEEK_DAYS_MAP[new Date(year, month, 1).getDay()];

  for (let i = -weekEndOffset; i < DAYS_COUNT - weekEndOffset; i++) {
    days.push(new Date(year, month, i));
  }

  return (
    <div className={styles.root}>
      <Row>
        <WeekDays />
      </Row>
      <Cells onDayClick={onDayClick} data={days} month={month} />
    </div>
  );
};
