import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    
    const { imagenes, cargando } = useFetchGifs( category );
    
    return (
        <>
            <h3>{category}</h3>
            {
                cargando && <h2>Cargando...</h2>
            }
            <div className="card-grid">
                {/* //Este codigo realiza una lista con los titulos de las imagenes
                 {imagenes.map(imagen=>
                    <li key={imagen.idImagen}>
                        {imagen.tituloImagen}
                    </li> 
                    )}  */}

                {imagenes.map( ( imagenes )=>
                    (
                        <GifItem 
                            key={imagenes.idImagen}
                            {...imagenes}//Aqui se envia al componente GifItem todo objeto imagenes, es decir, idImagen, tituloImagen, urlImagen
                        />
                    )
                )}
            </div>
        </>
    );
};

