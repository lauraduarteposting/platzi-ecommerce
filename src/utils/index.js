/**
 * This function calculates total price of a new order
 * @param {Array} products  cart products: Array of Objects
 * @returns {number} total price
 */
const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => {
    sum += product.price;
  });
  return sum;
};

export { totalPrice };
