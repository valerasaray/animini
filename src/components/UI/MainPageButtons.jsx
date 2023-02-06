import React from 'react';
import LinkButton from './LinkButton';

function MainPageButtons() {
    return (
        <nav className="flex justify-center">
            <LinkButton
                to="removebg"
                className="mr-1 sm:m-3 p-1 sm:p-3 border-2 border-black rounded-md text-white bg-black text-sm sm:text-lg"
            >
                Удалить фон
            </LinkButton>
            <LinkButton
                to="minimize"
                className="ml-1 sm:m-3 p-1 sm:p-3 border-2 border-black rounded-md text-white bg-black text-sm sm:text-lg"
            >
                Нарисовать арт
            </LinkButton>
        </nav>
    );
}

export default MainPageButtons;
