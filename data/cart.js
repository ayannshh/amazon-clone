let cart = JSON.parse(localStorage.getItem('cart')) || [
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }
];

export function addToCart(productId) {
  let matchingItem = cart.find(item => item.productId === productId);
  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  saveCart();
}

export function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export { cart };