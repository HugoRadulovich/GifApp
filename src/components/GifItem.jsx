


import React from 'react'

export const GifItem = (image) => {
    return (
        <div className="border-2 rounded w-full border-stone-800">
            <img 
            src={image.url} 
            alt={image.title} 
            className="w-full h-3/4"
            />
            <p className="font-mono font-semibold text-center text-3xl">{image.title}</p>
            
        </div>
    )
}
