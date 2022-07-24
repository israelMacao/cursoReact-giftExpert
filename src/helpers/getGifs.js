export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ijZFEIVRazHlQb5z44wj4ULtxCgiBkpW&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(imagen => ({
        idImagen: imagen.id,
        tituloImagen: imagen.title,
        urlImagen: imagen.images.downsized_medium.url
    }));
    return gifs;
}