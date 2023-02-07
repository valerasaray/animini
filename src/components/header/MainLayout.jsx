import { Link, Outlet } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';

function MainLayout() {
    return (
        <>
            <header className="pl-2 pr-2 h-6 sm:h-16 w-full shadow-gray-300 shadow-sm bg-white absolute">
                <nav className="bg-white flex justify-between">
                    <button>
                        <Link to="/" className="w-min">
                            <img
                                src="logo.png"
                                alt="logo"
                                className="h-6 sm:h-14 bg-white"
                            />
                        </Link>
                    </button>
                    <button>
                        <FiMoon className="h-6 w-6 sm:h-16 sm:w-16 bg-transparent" />
                        {/* <FiSun className="h-5 w-5 sm:h-14 sm:w-14 bg-transparent" /> */}
                    </button>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default MainLayout;
