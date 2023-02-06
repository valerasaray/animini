function MainPageImages() {
    return (
        <div className="flex justify-center flex-wrap my-8">
            <div className="m-3">
                <img
                    src="komi1.png"
                    alt="komi1"
                    className="w-14 sm:w-36 md:w-60"
                />
            </div>
            <div className="m-3">
                <img
                    src="arrow.png"
                    alt="arrow"
                    className="w-8 h-8 sm:w-20 sm:h-20 md:w-28 md:h-28 my-4 sm:my-10 md:my-20"
                />
            </div>
            <div className="m-3">
                <img
                    src="komi2.png"
                    alt="komi2"
                    className="w-14 sm:w-36 md:w-60"
                />
            </div>
        </div>
    );
}

export default MainPageImages;
