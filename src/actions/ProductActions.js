

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  item: item,
});

export const deleteProduct = (item) => ({
  type: "DELETE_PRODUCT",
  item: item,
});
