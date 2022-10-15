const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UD4Y1nPrKTOmBO1rr3ZlH1zg4yZZ74gG&q=${category}&limit=9`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img =>  ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    
    return gifs;
}

export default getGifs;