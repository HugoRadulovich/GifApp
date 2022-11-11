import { useState } from "react"



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1)return;
        onNewCategory([inputValue.trim()]);
        setInputValue('');
    }

  

    return (
       
        <form onSubmit={onSubmit} className=" ">
            <input 
            type="text" 
            placeholder="Ingrese gif a buscar"
            className="border-2 rounded w-full p-2" 
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
    )
}
