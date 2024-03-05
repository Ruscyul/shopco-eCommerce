import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './app/styles/index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Shop, Product, Cart } from './pages';

const router = createBrowserRouter([
  {
    path: '/shopco-eCommerce',
    element: <App />,
    children: [
      {
        path: '/shopco-eCommerce',
        element: <Home />,
      },
      {
        path: '/shopco-eCommerce/shop',
        element: <Shop />,
      },
      {
        path: '/shopco-eCommerce/product',
        element: <Product />,
      },
      {
        path: '/shopco-eCommerce/cart',
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
