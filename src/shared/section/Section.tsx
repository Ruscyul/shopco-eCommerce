import Button from '../../shared/button/Button';
import styles from './Section.module.scss';
import buttonStyles from '../../shared/button/Button.module.scss';
import { ReactNode } from 'react';

interface sectionProps {
  className?: string;
  title: string;
  buttonText: string;
  children?: ReactNode;
}

function Section(props: sectionProps) {
  const { className = '', title = '', buttonText = '', children } = props;

  return (
    <section className={`${styles['section']} container`}>
      <h2 className={styles['section__title']}>{title}</h2>
      {children}
      <Button
        className={`${styles['section__button']} ${buttonStyles['button--transparent']} ${buttonStyles['button--small']}`}
        text={buttonText}
      />
    </section>
  );
}

export default Section;
