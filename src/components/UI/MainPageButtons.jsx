import React from 'react';
import LinkButton from './LinkButton';

function MainPageButtons() {
    return (
        <div className="flex justify-center flex-wrap">
            <LinkButton to="removebg">Удалить фон</LinkButton>
            <LinkButton to="minimize">Нарисовать арт</LinkButton>
        </div>
    );
}

export default MainPageButtons;
