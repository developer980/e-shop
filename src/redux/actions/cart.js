export function addToCart(payload) {
  return {
    type: "ADD_TO_CART",
    payload,
  };
}

export function rFrom_cart(payload) {
  return {
    type: "remove_from_cart",
    payload,
  };
}
