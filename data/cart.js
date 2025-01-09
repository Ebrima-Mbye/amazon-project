export let cart = JSON.parse(localStorage.getItem("cart")) || [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOptionId: "1",
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliveryOptionId: "2",
  },
];
saveToStorage();

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
}

let selectQuantity;
export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  selectQuantity = Number(
    document.querySelector(`.js-quantity-select-${productId}`).value
  );
  if (matchingItem) {
    matchingItem.quantity += selectQuantity;
  } else {
    cart.push({
      productId,
      quantity: selectQuantity,
      deliveryOptionId: "1", // For now, default delivery option.
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  let newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem !== null && cartItem.productId !== productId) {
      /*
      I was really bugged down here because I was pushing 
      cartItem.productId instead of just cartItem22-07-24,
      from around 9 a.m. to right now 15:59, boys' house
      */
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      cartItem.quantity = newQuantity;
    }
  });
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}
