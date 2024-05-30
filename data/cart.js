export const cart = [];


// ------------------------------------------------
export function addToCart(productId) {
  // To check if the products already in the cart
  let matchingItem;
      
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  
  // To enable the quantity selector
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

  const quantity = Number(quantitySelector.value);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity
    });
  }
}