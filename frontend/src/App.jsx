import { useState } from 'react'
import AppRouter from './AppRouter'
import { DarkMode } from './context/context'
import styles from './App.module.scss'

function App() {
	const [darkMode, setDarkMode] = useState(false)

	return (
		<div className={styles.app + ' dark:bg-neutral-800'}>
			<DarkMode.Provider value={{ darkMode, setDarkMode }}>
				<AppRouter />
			</DarkMode.Provider>
		</div>
	)
}

export default App
