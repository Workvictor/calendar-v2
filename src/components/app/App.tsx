import React, { useState } from 'react';

import styles from './styles.module.scss';
import { Grid } from 'components/grid/Grid';
import { monthLabels } from './monthLabels';
import { Row } from 'components/row/Row';

export const App: React.FC = () => {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [selectedDate, setSelectedDate] = useState(date);

  function onDayClick(date: Date) {
    setSelectedDate(date);
  }

  const changeYear = (dir: number) => () => {
    setYear(currentYear => currentYear + dir);
  };

  const changeMonth = (dir: number) => () => {
    const newMonth = month + dir;
    if (newMonth < 0) {
      setYear(currentYear => currentYear - 1);
      setMonth(11);
    } else if (newMonth > 11) {
      setYear(currentYear => currentYear + 1);
      setMonth(0);
    } else {
      setMonth(newMonth);
    }
  };

  const selectedData = [
    selectedDate.getDate(),
    selectedDate.getMonth() + 1,
    selectedDate.getFullYear()
  ].map(i => String(i).padStart(2, '0'));

  return (
    <div className={styles.root}>
      <h1>Calendar [v 0.2.0]</h1>
      <hr />
      <div>selected date: {selectedData.join('.')}</div>
      <hr />
      <div className={styles.controls}>
        <button className={styles.control} onClick={changeYear(-1)}>
          {'<'}
        </button>
        {year}
        <button className={styles.control} onClick={changeYear(1)}>
          {'>'}
        </button>
      </div>
      <div className={styles.controls}>
        <button className={styles.control} onClick={changeMonth(-1)}>
          {'<'}
        </button>
        {monthLabels[month]}
        <button className={styles.control} onClick={changeMonth(1)}>
          {'>'}
        </button>
      </div>
      <hr />
      <Row>
        <Grid year={year} month={month} onDayClick={onDayClick} />
      </Row>
    </div>
  );
};
