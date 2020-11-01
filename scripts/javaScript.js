// ..........phone quantity increase... .......

document
  .getElementById("phone-increase-button")
  .addEventListener("click", function () {
    handleProductsQuantity("phone-item-number", "phone-price", 1219, true); // 1219 per phone price
  });

// ..........phone quantity decrease... .......

document
  .getElementById("phone-decrease-button")
  .addEventListener("click", function () {
    handleProductsQuantity("phone-item-number", "phone-price", 1219, false);
  });

// .............case quantity increase,,,,,,,,,,,,,,

document
  .getElementById("case-increase-button")
  .addEventListener("click", function () {
    handleProductsQuantity("case-item-number", "case-price", 59, true); // 59 per case price
  });

// .............case quantity decrease,,,,,,,,,,,,,,

document
  .getElementById("case-decrease-button")
  .addEventListener("click", function () {
    handleProductsQuantity("case-item-number", "case-price", 59, false);
  });

function handleProductsQuantity(id, display1, price, isIncrease) {
  const amount = document.getElementById(id).value;
  const currentAmount = parseInt(amount);

  let totalAmount = currentAmount;

  if (isIncrease == true) {
    totalAmount = currentAmount + 1;
  }
  if (isIncrease == false && totalAmount > 0) {
    // যেহেতু কমাবো তাই ০ থেকে বড় হতে হবে।
    totalAmount = currentAmount - 1;
  }
  document.getElementById(id).value = totalAmount;
  var totalPrice1 = price * totalAmount;
  document.getElementById(display1).innerText = totalPrice1;
  calculateSubTotal();
}
// ............subtotal section,,,,,,,,,,
function calculateSubTotal() {
  var phonePriceInput = document.getElementById("phone-price");
  var phonePriceAmount = parseInt(phonePriceInput.innerText);

  var casePriceInput = document.getElementById("case-price");
  var casePriceAmount = parseInt(casePriceInput.innerText);

  var finalSubTotal = phonePriceAmount + casePriceAmount;
  var totalTax = (0.05 * finalSubTotal).toFixed(2);

  var totalTaxAmount = parseFloat(totalTax);

  document.getElementById("sub-total").innerText = finalSubTotal;
  document.getElementById("tax").innerText = totalTax;

  document.getElementById("total").innerText = finalSubTotal + totalTaxAmount;
}
