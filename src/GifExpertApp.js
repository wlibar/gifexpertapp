import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

/**
 * Componente principal
 * @returns 
 */
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dogs']);

    return (
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCategories = { setCategories } />

            <hr />
      
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key = {category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}


// snniped rafc
