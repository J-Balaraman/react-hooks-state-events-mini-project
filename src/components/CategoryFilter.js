import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
