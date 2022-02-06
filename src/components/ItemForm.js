import React from "react";
import { useState } from "react/cjs/react.development";
import { v4 as uuid } from "uuid";



function ItemForm({onItemFormSubmit}) {

const [formName, setFormName] = useState("")
const [formCategory, setFormCategory] = useState("Produce")

function handleName(e){
  setFormName(e.target.value)
}

function handleCategory(e){
  console.log(e.target.value)

  setFormCategory(e.target.value)
}

function handleFormSubmit(e){
  e.preventDefault()
  const newItem = {
        id: uuid(),
        name: formName,
        category: formCategory,
      };
      onItemFormSubmit(newItem)
  
}

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleName} value={formName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory} value={formCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
