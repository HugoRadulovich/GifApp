import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";





export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3 className="font-mono font-bold text-6xl p-2">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-2" >
                {
                    images.map((image) =>
                    <GifItem
                    key={image.id}
                    {...image}
                    />
                    )
                }
            </div>
        </>
    )
}
