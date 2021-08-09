


const getGits = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=20&api_key=hYA8nsqSebY7jPxsAQF6axvt99j3h0sl`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs

}


export default getGits
