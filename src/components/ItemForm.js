import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });

  function handleChangeForm(event) {
    const name = event.target.name;
    let value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    onItemFormSubmit({ id: uuid(), ...formData });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmitForm}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChangeForm}
          value={formData.name}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={handleChangeForm}
          value={formData.category}
        >
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
