import MainPageImages from './UI/MainPageImages'
import MainPageButtons from './UI/MainPageButtons'

function MainPage() {
	return (
		<main className='h-full'>
			<div className='h-1/5' />
			<section>
				<MainPageImages />
				<title className='flex flex-wrap justify-center font-bold p-3 text-sm sm:text-xl text-center dark:text-white'>
					Генерация минималистичных аниме-артов
				</title>
				<MainPageButtons />
			</section>
		</main>
	)
}

export default MainPage
