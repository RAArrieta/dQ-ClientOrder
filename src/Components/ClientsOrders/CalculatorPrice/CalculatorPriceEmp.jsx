const CalculatorPriceEmp = (cart) => {
  let priceEmpanadas = 0;

  const quantityEmpanadas = cart.reduce((accumulator, product) => {
    if (product.category === "Empanadas") {
      return accumulator + product.quantity;
    } else {
      return accumulator;
    }
  }, 0);

  if (quantityEmpanadas < 6) {
    priceEmpanadas = 400 * quantityEmpanadas;
  } else if (quantityEmpanadas % 6 === 0) {
    priceEmpanadas = (2000 * quantityEmpanadas) / 6;
  } else if (quantityEmpanadas > 6) {
    priceEmpanadas =
      (quantityEmpanadas % 6) * 400 + Math.floor(quantityEmpanadas / 6) * 2000;
  }

  return priceEmpanadas;
};

export default CalculatorPriceEmp;
