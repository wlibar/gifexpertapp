import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs';
/**
 * CustomHook que carga la data invocando el helper
 * getGifs. Controla ademas la bandera de carga
 */
export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading: true
    });
    /**
     * useEffect: Usar este efecto. Sirve para que getGifs se ejecute una sola vez
     * cuando el componente es renderizado.
    */
    useEffect( () =>{
        getGifs( category)
            .then(imgs => {
                setstate({
                    data:imgs,
                    loading: false
                });
            })
    }, [category])
    return state;
}
