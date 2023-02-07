import React from 'react';
import LinkButton from './LinkButton';

function MainPageButtons() {
    return (
        <nav className="flex justify-center">
            <LinkButton
                to="removebg"
                className="ml-1 mr-1 sm:m-3 p-1 sm:p-3 rounded-md text-white bg-black text-sm sm:text-lg w-28 sm:w-44 flex justify-center dark:bg-white dark:text-black"
            >
                Удалить фон
            </LinkButton>
            <LinkButton
                to="minimize"
                className="ml-1 mr-1 sm:m-3 p-1 sm:p-3 rounded-md text-white bg-black text-sm sm:text-lg w-28 sm:w-44 flex justify-center dark:bg-white dark:text-black"
            >
                Нарисовать арт
            </LinkButton>
        </nav>
    );
}

export default MainPageButtons;
