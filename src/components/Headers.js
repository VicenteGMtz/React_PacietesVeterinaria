import React from 'react';
import PropTypes from 'prop-types';



const Header = ({titulo}) => (
    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>

);

//documentacion con PropTypes en caso de que el titulo no exista en el componetne Header se mostrará un erroe en consola
Header.propTypes={
    titulo : PropTypes.string.isRequired
}
    

 
export default Header;