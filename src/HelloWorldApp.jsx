import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const HelloWorldApp = () => {

const [categories,setCategories] = useState(['Catherin']);

const onAddCategory =(newCategory) =>{
    console.log(newCategory);

   if(categories.includes(newCategory)) return;

     setCategories([ newCategory, ...categories, ])
}

console.log(categories);

return (
<>
<h1>GiffExpertApp</h1>

<AddCategory  

    onNewCategory = {event => onAddCategory(event)}
   //setCategories = {setCategories} 
/>



    {categories.map(category => <GifGrid key={category} category={category}/>)}



</>
)}