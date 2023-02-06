import { Link, Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <>
            <header className="p-2 h-16 shadow-gray-300 shadow-sm bg-white">
                <Link to="/">
                    <img src="logo.png" alt="logo" className="h-12 bg-white" />
                </Link>
            </header>
            <Outlet />
        </>
    );
}

export default MainLayout;
