const CalculatorPrice = (quantityEmpanadas, priceEmpanadas) => {
  console.log("Entre a CalculatorPrice")
  console.log("quantityEmpanadas")
  console.log(quantityEmpanadas)
  
  if (quantityEmpanadas < 6) {
    priceEmpanadas = 400 * quantityEmpanadas;
  } else if (quantityEmpanadas % 6 === 0) {
    priceEmpanadas = (2000 * quantityEmpanadas) / 6;
  } else if (quantityEmpanadas > 6) {
    priceEmpanadas =
      (quantityEmpanadas % 6) * 400 +
      Math.floor(quantityEmpanadas / 6) * 2000;
  }

  return priceEmpanadas;
}

export default CalculatorPrice