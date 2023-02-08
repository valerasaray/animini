import React from 'react'
import LinkButton from './LinkButton'
import styles from './MainPageButtons.module.scss'

function MainPageButtons() {
	return (
		<nav className={styles.nav}>
			<LinkButton
				to='removebg'
				className={styles.btn + ' dark:bg-white dark:text-black'}
			>
				Удалить фон
			</LinkButton>
			<LinkButton
				to='minimize'
				className={styles.btn + ' dark:bg-white dark:text-black'}
			>
				Нарисовать арт
			</LinkButton>
		</nav>
	)
}

export default MainPageButtons
