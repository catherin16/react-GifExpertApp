export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=gHczSOeNxhZHBQ2CXY0fWsIysN3zXK6h&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();


     const gifs = data.map(img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,

     }));

    console.log(gifs);
    return gifs;


}

