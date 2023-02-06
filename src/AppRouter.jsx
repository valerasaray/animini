import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import MainLayout from './components/header/MainLayout';
import MainPage from './components/MainPage';
import routes from './router/routes';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index={true} element={<MainPage />} />
                    {routes.map((route) => {
                        return (
                            <Route
                                path={route.path}
                                element={<route.element />}
                                key={uuidv4()}
                            />
                        );
                    })}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
