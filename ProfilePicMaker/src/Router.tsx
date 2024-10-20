import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Gallery from './pages/Gallery';
import FabricPage from './pages/FabricPage';
import Onboarding from './pages/Onboarding';
import Layout from './components/Layout';
import MakingProfilePic from './pages/MakingProfilePic';

const router = createBrowserRouter([
  {
    path: '',
    element: <Onboarding />,
  },
  {
    path: 'page',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'canvas',
        element: <MakingProfilePic />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'fabric',
        element: <FabricPage />,
      },
    ],
  },
]);

export default router;
