import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
  header?: ReactNode;
  footer?: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <div>
      {props.header}
      <main>
        <Outlet />
      </main>
      {props.footer}
    </div>
  );
}

export default Layout;
