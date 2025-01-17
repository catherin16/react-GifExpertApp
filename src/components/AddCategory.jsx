import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One punch');

    const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1) return;
         onNewCategory(inputValue.trim());
        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    } 

    return(

         <form onSubmit={ (event) => onSubmit(event)}>

         <input 
        type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={ (event) => onInputChange(event)}
        />
         </form>

    )
}