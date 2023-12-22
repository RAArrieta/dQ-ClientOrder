import "./CategorySelector.css"

const CategorySelector = ({
  category,
  products,
  selectedCategories,
  onChange,
}) => (
  <div>
    <label className="category" htmlFor={`${category}Select`}>{category}:</label>
    <select
      id={`${category}Select`}
      onChange={(e) => onChange(category, e.target.value)}
      value={selectedCategories[category] || ""}
    >
      <option value="">Seleccionar...</option>
      {products
        .filter((product) => product.category === category)
        .map((product) => (
          <option key={product.id} value={product.id} className="prodAndPrice">
            {`${product.name} $${product.price}`}
          </option>
        ))}
    </select>
  </div>
);

export default CategorySelector;
