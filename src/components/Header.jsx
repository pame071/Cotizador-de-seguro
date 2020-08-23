import React from 'react';
import PropType from 'prop-types';

const Header = ({titulo}) => {
    return (
        <header>
            <h1>{titulo}</h1>
        </header>
    );
}

Header.propType = {
    titulo: PropType.string.isRequired
}
 
export default Header;