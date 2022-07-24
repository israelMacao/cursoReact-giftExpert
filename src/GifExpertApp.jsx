import { useState } from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch' ]);
    const onAddCategory = (newCategory) => {

        //Valido que no exista el nuevo valor recibido como categoria
        //En caso de existir devuelvo return para que no se ejecute el resto del codigo
        //En caso de no existir agrego el nuevo valor al setCategories
        if(categories.includes(newCategory)) return;

        setCategories([ ...categories, newCategory ]);

    }

    
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={(evento) => onAddCategory(evento)}
            />
            { categories.map(category => 
                <GifGrid key={category} category={category}/>) }    
            
        </>
    )
}