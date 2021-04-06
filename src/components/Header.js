import React from 'react';

const Header = ({name}) => { 

    return (
        <header>
            <h1>React Introduction</h1>
            <div>{name}</div>
        </header>
    );
};

export default Header;