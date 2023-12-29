// Create a helper function
export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {
  // Calculate items price

  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  // Calculate shipping price (if order is over $100 then free else $10 shipping)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)
  // Calculate tax price (this will be %15 tax)
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
  // Calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2)

  localStorage.setItem('cart', JSON.stringify(state))
  return state
}
