import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import ScrollToTop from '../../lib/ScrollToTop';

type LayoutProps = {
  header?: ReactNode;
  footer?: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <>
      <ScrollToTop />
      <div className={styles.layout}>
        {props.header}
        <main className={styles.main}>
          <Outlet />
        </main>
        {props.footer}
      </div>
    </>
  );
}

export default Layout;
