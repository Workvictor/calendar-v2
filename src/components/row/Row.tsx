import React from 'react';

import { classJoin } from 'utils/classJoin';
import { ClassName } from 'types';
import styles from './styles.module.scss';

export const Row: React.FC<ClassName> = props => {
  const { children, className } = props;

  return <div className={classJoin(styles.root, className)}>{children}</div>;
};
