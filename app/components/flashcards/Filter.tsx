function Filter({ categories, selectedCategory, onCategoryChange }) {
    return (
      <div className="flex gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedCategory === category
                ? 'bg-violet-600 text-white'
                : 'bg-violet-100 text-violet-700 hover:bg-violet-200'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
  
  export default Filter;