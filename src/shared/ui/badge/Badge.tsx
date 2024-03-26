import { ReactNode } from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
  icon: ReactNode;
}

function Badge(props: BadgeProps) {
  const { icon } = props;

  return <div className={styles['badge']}>{icon}</div>;
}

export default Badge;
