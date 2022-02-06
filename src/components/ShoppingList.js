import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onSetItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, onSearchChange] = useState("")


  function handleNewItem(newItem){

    let newItemsArray = [...items, newItem]

    onSetItems(newItemsArray)
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
      <ItemForm onItemFormSubmit={handleNewItem} />
      <Filter 
      onCategoryChange={handleCategoryChange}
      onSearchChange={handleFilteredInput}
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
