import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import App from './App';
import Canvas from './pages/Canvas';
import Gallery from './pages/Gallery';


const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'canvas',
                element: <Canvas />
            },
            {
                path: 'gallery',
                element: <Gallery />
            },
        ]
    },

])

export default router;