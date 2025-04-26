import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Viewing } from './pages/Viewing.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/video/:id',
    element: <Viewing />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
