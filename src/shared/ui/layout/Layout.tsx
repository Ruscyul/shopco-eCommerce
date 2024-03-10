import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

type LayoutProps = {
  header?: ReactNode;
  footer?: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <div className={styles.layout}>
      {props.header}
      <main className={styles.main}>
        <Outlet />
      </main>
      {props.footer}
    </div>
  );
}

export default Layout;
