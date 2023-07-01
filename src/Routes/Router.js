import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import About from '../components/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div>
                <Navbar />
                <Home />
            </div>
        ),
        // errorElement: <ErrorPage />,
        errorElement: 'no page found',
    },
    {
        path: '/about',
        element: (
            <div>
                <Navbar />
                <About />
            </div>
        ),
        // errorElement: <ErrorPage />,
        errorElement: 'no page found',
    },
]);
const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
