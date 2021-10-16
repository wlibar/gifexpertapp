import React, {useState} from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * Agrega una categoria. 
 * Renderiza el formulario con la caja de texto. 
 * Al presionar enter en la caja agrega la categoria al arreglo.
 */
export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2){
            setCategories( cats => [inputValue,...cats] );
            setInputValue('');
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={ inputValue }
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}