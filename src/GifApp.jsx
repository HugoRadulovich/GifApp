import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"



export const GifApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty'])

    const onAddCategory = (newCategory) => {
        if(newCategory.includes(categories))return;
        setCategories([newCategory,...categories]);
    }

    return (
        <div className="bg-slate-200">
            {/* Titulo */}
            <h1 className="font-mono font-bold text-7xl text-center p-2">GifApp</h1>

            {/* Input */}
            <AddCategory  onNewCategory={(event) => onAddCategory(event)}/>

            {/* Listado de Gif */}
            {
                categories.map((category) =>
                <GifGrid
                    key={category}
                    category = {category}
                    
                />)
            }

            {/* Gif Item */}
        </div>
    )
}
