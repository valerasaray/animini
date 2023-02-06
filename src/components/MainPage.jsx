import MainPageImages from './UI/MainPageImages';
import MainPageButtons from './UI/MainPageButtons';

function MainPage() {
    return (
        <main className="h-full">
            <div className="h-1/5" />
            <section className="h-3/5">
                <MainPageImages />
                <h1 className="flex flex-wrap justify-center font-bold p-3 text-sm sm:text-xl text-center">
                    Генерация минималистичных аниме-артов
                </h1>
                <MainPageButtons />
            </section>
            <div className="h-1/5" />
        </main>
    );
}

export default MainPage;
