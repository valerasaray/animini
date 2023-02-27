import MainPageImages from './UI/MainPageImages'
import MainPageButtons from './UI/MainPageButtons'
import styles from './MainPage.module.scss'

function MainPage() {
	return (
		<main className={styles.main}>
			<section>
				<MainPageImages />
				<title className={styles.title + ' dark:text-white'}>
					Генерация минималистичных аниме-артов
				</title>
				<MainPageButtons />
			</section>
		</main>
	)
}

export default MainPage
