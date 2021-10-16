import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

/**
 * Recupera de la api las imagenes de una categoría y
 * pinta una por una invocando el componente GifGridItem
 * 
 */
export const GifGrid = ({category}) => {
  // Invoca el custohook que recupera las imagenes
  const {data:images, loading} = useFetchGifs( category );

  return (
    <>
      <h3 className="animate__pulse">{ category }</h3> 
      { loading && <p className="animate__animated animate__flash">Loading</p> }
      <div className="card-grid">
          {
            images.map((img) => (
            <GifGridItem 
              key={img.id}
              {...img}/>
            )) }
         
      </div>
    </>
  )
}
