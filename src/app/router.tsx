import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import { RouteErrorPage } from '../pages/RouteErrorPage';
import { QEOSCaseStudyPage } from '../pages/QEOSCaseStudyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects/quantum-energy-os', element: <QEOSCaseStudyPage /> },
      { path: 'projects/tamayo', element: <div>Tamayo Case Study - Coming Soon</div> },
      { path: 'projects/witchcraft', element: <div>WitchCraft Case Study - Coming Soon</div> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);