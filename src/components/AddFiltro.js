import React, {useState} from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * Agrega un filtro de búsqueda sobreescribiendo el anterior. 
 * Renderiza el formulario con la caja de texto. 
 * Al presionar enter en la caja agrega el filtro de búsqueda.
 */
export const AddFiltro = ({ setFiltro }) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //if (inputValue.trim().length > 2){
            setFiltro( filtro => inputValue );
            setInputValue('');
        //}
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                className="form-control mr-sm-2"
                type="text" 
                value={ inputValue }
                placeholder="Busque por periodo (Ej. 2021.1), arquitecturas, tecnologías y presione ENTER"
                onChange={handleInputChange}
            />
        </form>
    )
}

AddFiltro.propTypes = {
    setFiltro: PropTypes.func.isRequired
}