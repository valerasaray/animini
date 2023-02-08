import { useContext } from 'react'
import { DarkMode } from '../../context/context'
import styles from './MainPageImages.module.scss'

function MainPageImages() {
	const { darkMode } = useContext(DarkMode)

	return (
		<article className={styles.article}>
			<div>
				<img src='komi1.png' alt='komi1' className={styles.imgKomi} />
			</div>
			<div className={styles.arrows}>
				{darkMode ? (
					<img src='arrowWhite.png' alt='arrow' className={styles.imgArrow} />
				) : (
					<img src='arrow.png' alt='arrow' className={styles.imgArrow} />
				)}
			</div>
			<div>
				<img src='komi2.png' alt='komi2' className={styles.imgKomi} />
			</div>
		</article>
	)
}

export default MainPageImages
