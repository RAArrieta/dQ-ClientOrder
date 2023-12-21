const QuantityInput = ({ category, selectedProductId, productQuantities, onChange }) => (
    <div>
      <label htmlFor={`${category}Quantity`}>Cantidad:</label>
      <input
        type="number"
        id={`${category}Quantity`}
        value={productQuantities[selectedProductId] || 1}
        onChange={(e) => onChange(category, parseInt(e.target.value, 10))}
      />
    </div>
  );
  
  export default QuantityInput;