

export const getGifs = async(category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VMmwRTi6Pmod4nfp44EFtHzpdpe7DAnh&q=${category}&limit=12`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    console.log(data)

    const gifs = data.map(img => 
        
        ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        })
    )


    return gifs

    
    
    
}

