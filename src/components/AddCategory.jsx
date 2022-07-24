import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [ inputValue, setInputValue ] = useState('');
    const onInputChange = ({target}) => {
        //console.log(target.value);
        setInputValue(target.value);
    };
    //Aqui insero lo que escribo en el input
    const onSubmintEvent = (evento) => {
        evento.preventDefault();

        //Con este if verifcamos quel input no inserte a las categorias valores en blanco
        if(inputValue.trim().length <= 1){return}

        //onNewCategory es la funcion que se encuentra en GifExpertApp la cual recibe un evento
        //En este caso el evento es el valor de la entrada inputValue
        onNewCategory(inputValue.trim());

        //Aquí vuelvo a limpiar el valor de entrada cuando demos enter 
        setInputValue('');

    };
    return(
        <form onSubmit={(evento => onSubmintEvent(evento))}>
            <input
                type = "text"
                placeholder = "Buscar Gifts"
                value = { inputValue }
                onChange = { onInputChange }
            />
        </form> 
         
    )
}