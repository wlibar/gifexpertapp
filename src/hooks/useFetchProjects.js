import { useEffect, useState } from 'react';
import {getProjects} from '../helpers/getProjects';
/**
 * CustomHook que carga la data invocando el helper
 * getProjects. Controla ademas la bandera de carga
 */
export const useFetchProjects = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading: true
    });
    /**
     * useEffect: Usar este efecto. Sirve para que getProjects se ejecute una sola vez
     * cuando el componente es renderizado.
    */
    useEffect( () =>{
        const projects = getProjects( category);

        setstate({
            data:projects,
            loading: false
        });
        
    }, [category])
    return state;
}
