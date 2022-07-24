//Aquie recibo el objeto imegenes y por desestructuracion obtengo el titulo y la url de dicho objeto
export const GifItem = ({tituloImagen, urlImagen}) => {
    return (
        <div className="card">
            <img src={urlImagen} alt={tituloImagen} />
            <p>{tituloImagen}</p>
        </div>
    );
}