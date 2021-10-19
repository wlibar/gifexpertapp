import React,{useState} from 'react'
import { AddFiltro } from './components/AddFiltro';
import { RepoGrid } from './components/RepoGrid';

/**
 * Componente principal de la aplicación
 * @returns 
 */
export const App = () => {
    const [filtro, setFiltro] = useState("");

    return (
        <>
            <h2>Búsqueda</h2>

            <AddFiltro setFiltro = { setFiltro } />

            <hr />
      
        <ol>
            {
                <RepoGrid 
                    key = {filtro}
                    filtro={filtro}
                />

            }
            </ol>
        </>
    )
}


