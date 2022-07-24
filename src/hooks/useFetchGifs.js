import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

const [imagenesP, setImagnesP] = useState([]);
const [cargandoP, setCargandoP] = useState(true);

    const getImagenes = async() => {
        const newImagen = await getGifs(category);
        setImagnesP(newImagen);
        setCargandoP(false);
    };
    
    useEffect(()=>{
        getImagenes();
        
    },[]);

    return{
        imagenes: imagenesP,
        cargando: cargandoP
    }
}