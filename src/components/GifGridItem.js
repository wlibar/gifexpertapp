import React from 'react';

/**
 * Componente que renderiza una imagen en particular.
 */
export const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__backInDown">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

