import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div>
            <div className="flex justify-center flex-wrap my-8">
                <div className="m-3">
                    <img
                        src="komi1.png"
                        alt="komi1"
                        className="w-20 sm:w-36 md:w-60"
                    />
                </div>
                <div className="m-3">
                    <img
                        src="arrow.png"
                        alt="arrow"
                        className="w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 my-5 sm:my-10 md:my-20"
                    />
                </div>
                <div className="m-3">
                    <img
                        src="komi2.png"
                        alt="komi2"
                        className="w-20 sm:w-36 md:w-60"
                    />
                </div>
            </div>

            <div className="flex justify-center flex-wrap">
                <Link to="removebg" className="m-3 p-3 border-2 border-black rounded-md text-white bg-black text-lg">Удалить фон</Link>
                <Link to="minimize" className="m-3 p-3 border-2 border-black rounded-md text-white bg-black text-lg">Нарисовать арт</Link>
            </div>
        </div>
    );
}

export default MainPage;
