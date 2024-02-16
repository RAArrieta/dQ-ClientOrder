const CalculatorPriceResto = (cart) => {
  const priceResto = cart.reduce((accumulator, product) => {
    if (product.category !== "Empanadas") {
      return accumulator + product.quantity * product.price;
    } else {
      return accumulator;
    }
  }, 0);

  return priceResto;
};

export default CalculatorPriceResto;
