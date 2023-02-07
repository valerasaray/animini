import { Link, Outlet } from 'react-router-dom'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useEffect, useState } from 'react'

function MainLayout() {
	const [darkMode, setDarkMode] = useState(false)

	useEffect(() => {
		const html = document.querySelector('html')
		if (darkMode) {
			html.classList.add('dark')
		} else {
			html.classList.remove('dark')
		}
	}, [darkMode])

	return (
		<>
			<header className='h-6 sm:h-16 w-full shadow-lg absolute'>
				<nav className='p-2 bg-white dark:bg-black flex justify-between'>
					<button>
						<Link to='/' className='w-min'>
							<img
								src='logo.png'
								alt='logo'
								className='h-6 sm:h-14 bg-transparent'
							/>
						</Link>
					</button>
					<button onClick={() => setDarkMode(!darkMode)}>
						{darkMode ? (
							<FiSun className='h-6 w-6 sm:h-14 sm:w-16 bg-transparent text-white' />
						) : (
							<FiMoon className='h-6 w-6 sm:h-14 sm:w-14 bg-transparent' />
						)}
					</button>
				</nav>
			</header>
			<Outlet />
		</>
	)
}

export default MainLayout
