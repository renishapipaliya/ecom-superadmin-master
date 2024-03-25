import React, { useState } from 'react';
import CategoryList from './CategoryList';

const ParentComponent = () => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(false);

  const handleAddCategory = (newCategory) => {
    // Update categories by adding the new category
    setCategories([...categories, newCategory]);
  };

  const handleEditCategory = (editedCategory) => {
    // Logic to edit category
  };

  const handleDeleteCategory = (categoryToDelete) => {
    // Logic to delete category
    setCategories(categories.filter(category => category.id !== categoryToDelete.id));
  };

  const handleSwitchChange = () => {
    setActiveCategory((prevActive) => !prevActive);
  };
  return (
    <div>
      {/* Other components */}
      <CategoryList
        categories={categories} // Pass categories as a prop
        onEditCategory={handleEditCategory}
        onDeleteCategory={handleDeleteCategory}
        onAddCategory={handleAddCategory} // Pass handleAddCategory to CategoryList
        active={active} // Pass active state to CategoryList
       handleSwitchChange={handleSwitchChange}// Pass handleSwitchChange to CategoryList
      />
      {/* Other components */}
    </div>
  );
};

export default ParentComponent;
