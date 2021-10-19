import React from 'react';
import { useFetchProjects } from '../hooks/useFetchProjects';
import { RepoGridItem } from './RepoGridItem';

/**
 * Recupera los proyectos según el filtro de búsqueda y
 * pinta cada proyecto invocando el componente RepoGridItem
 * 
 */
export const RepoGrid = ({filtro}) => {
  // Invoca el custohook que recupera las imagenes
  const {data:projects, loading} = useFetchProjects( filtro );

  return (
    <>
      <h3 className="animate__pulse">{ filtro }</h3> 
      { loading && <p className="animate__animated animate__flash">Loading</p> }
      <div className="card-grid">
          {
            projects.map((proj) => (
            <RepoGridItem 
              key={proj.id}
              {...proj}/>
            )) }
         
      </div>
    </>
  )
}
