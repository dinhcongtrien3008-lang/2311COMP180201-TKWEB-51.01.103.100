let cart = 0;
function addToCart(button) {
  const product = button.closest('.product');
  const priceElement = product.querySelector('.price');
  const price = parseInt(priceElement.innerText);
  cart += price;
  document.getElementById("total").innerText = cart.toLocaleString();
}
