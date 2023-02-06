import React from 'react';
import LinkButton from './LinkButton';

function MainPageButtons() {
    return (
        <nav className="flex justify-center flex-wrap">
            <LinkButton to="removebg">Удалить фон</LinkButton>
            <LinkButton to="minimize">Нарисовать арт</LinkButton>
        </nav>
    );
}

export default MainPageButtons;
