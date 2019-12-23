export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deleteProduct = productId => ({
  type: DELETE_PRODUCT,
  productId
});

export const createProduct = payload => ({
  type: CREATE_PRODUCT,
  payload
});

export const updateProduct = (productId, payload) => ({
  type: UPDATE_PRODUCT,
  productId,
  payload
});
