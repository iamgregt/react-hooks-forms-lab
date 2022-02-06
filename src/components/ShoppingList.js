import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, onSearchChange] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  })
  

  console.log(formData)

  function handleFormData(e){
    const key = e.target.name
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

  function addItem(e){
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    const newItemArray = [...items, newItem]
    return newItemArray
  }

  function handleFilteredInput(e){
    onSearchChange(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

 

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" ) return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onFormChange={handleFormData} onItemFormSubmit={addItem} />
      <Filter 
      onCategoryChange={handleCategoryChange}
      onFilterChange={handleFilteredInput}
      search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
