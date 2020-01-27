import React from 'react';

import { Row } from 'components/row/Row';
import { Day, DayAction } from 'components/day/Day';
import { ClassName } from 'types';

interface Props {
  data: Date[];
  month: number;
}

export const WEEKS_COUNT = 6;
export const WEEK_DAYS_COUNT = 7;

const weeks = new Array(WEEKS_COUNT).fill(0);
const weekDays = new Array(WEEK_DAYS_COUNT).fill(0);

export const Cells: React.FC<Props & ClassName & DayAction> = props => {
  const { data, month, className, onDayClick } = props;

  return (
    <div className={className}>
      {weeks.map((_, week) => (
        <Row key={week}>
          {weekDays.map((_, weekDay) => (
            <Day
              onDayClick={onDayClick}
              date={data[week * WEEK_DAYS_COUNT + weekDay]}
              month={month}
              key={weekDay}
            />
          ))}
        </Row>
      ))}
    </div>
  );
};
