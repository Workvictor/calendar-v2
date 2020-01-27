import React from 'react';

import { ClassName } from 'types';
import styles from './styles.module.scss';
import { classJoin } from 'utils/classJoin';

export interface CellProps {
  onClick?(): void;
}

export const Cell: React.FC<ClassName & CellProps> = props => {
  const { children, className, onClick } = props;

  return (
    <div onClick={onClick} className={classJoin(styles.root, className)}>
      {children}
    </div>
  );
};
