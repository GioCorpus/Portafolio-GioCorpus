import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import { RouteErrorPage } from '../pages/RouteErrorPage';
import { QEOSCaseStudyPage } from '../pages/QEOSCaseStudyPage';
import { TamayoCaseStudyPage } from '../pages/TamayoCaseStudyPage';
import { WitchCraftCaseStudyPage } from '../pages/WitchCraftCaseStudyPage';
import { AboutPage } from '../pages/AboutPage';
import { ResumePage } from '../pages/ResumePage';
import { ResearchPage } from '../pages/ResearchPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'research', element: <ResearchPage /> },
      { path: 'projects/quantum-energy-os', element: <QEOSCaseStudyPage /> },
      { path: 'projects/tamayo', element: <TamayoCaseStudyPage /> },
      { path: 'projects/witchcraft', element: <WitchCraftCaseStudyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);