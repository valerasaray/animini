import { Link, Outlet } from 'react-router-dom'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useContext, useEffect, useState } from 'react'
import { DarkMode } from '../../context/context'
import styles from './MainLayout.module.scss'

function MainLayout() {
	const { darkMode, setDarkMode } = useContext(DarkMode)

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
			<header className={styles.header}>
				<nav className={styles.nav + ' dark:bg-black'}>
					<button>
						<Link to='/' className={styles.link}>
							{darkMode ? (
								<img
									src='logoWhite.png'
									alt='logo'
									className={styles.imgLogo}
								/>
							) : (
								<img src='logo.png' alt='logo' className={styles.imgLogo} />
							)}
						</Link>
					</button>
					<button onClick={() => setDarkMode(!darkMode)}>
						{darkMode ? (
							<FiSun className={styles.imgSun} />
						) : (
							<FiMoon className={styles.imgMoon} />
						)}
					</button>
				</nav>
			</header>
			<Outlet />
		</>
	)
}

export default MainLayout
