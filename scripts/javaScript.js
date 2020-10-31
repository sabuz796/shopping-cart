// ..........plus button to increase... .......

const phoneIncreaseButton = document.getElementById("phone-increase-button");
phoneIncreaseButton.addEventListener("click", function () {
  increaseNumber("phone-item-number", "phone-price", 1219); // 1219 per phone price
});

// ..........minus button to decrease... .......

const phoneDecreaseButton = document.getElementById("phone-decrease-button");
phoneDecreaseButton.addEventListener("click", function () {
  decreaseNumber("phone-item-number", "phone-price", 1219);
});

// .............case price,,,,,,,,,,,,,,

var caseIncreaseButton = document.getElementById("case-increase-button");
caseIncreaseButton.addEventListener("click", function () {
  increaseNumber("case-item-number", "case-price", 59); // 59 per case price
});

var caseDecreaseButton = document.getElementById("case-decrease-button");
caseDecreaseButton.addEventListener("click", function () {
  decreaseNumber("case-item-number", "case-price", 59);
});

var currentSubTotal = document.getElementById("sub-total").innerText;
var subTotal = parseFloat(currentSubTotal);

var currentTax = document.getElementById("tax").innerText;
var tax = parseFloat(currentTax);
var subFinalTotal = (subTotal * 0.05).toFixed(2); // toFixed(2) means only 2 digits will be shown after decimal

var subFinalTotalNumber = parseFloat(subFinalTotal);
document.getElementById("tax").innerText = subFinalTotal;
var totalCurrentAmount = document.getElementById("total").innerText;
var total = parseFloat(totalCurrentAmount);
var totalAmount = subTotal + subFinalTotalNumber;

document.getElementById("total").innerText = totalAmount;

function increaseNumber(id, display, perItemPrice) {
  const amount = document.getElementById(id).value;
  const currentAmount = parseFloat(amount);
  const totalAmount = currentAmount + 1;
  document.getElementById(id).value = totalAmount;
  // document.getElementById(display).innerText = perItemPrice * totalAmount;
  var totalPrice = perItemPrice * totalAmount;
  document.getElementById(display).innerText = totalPrice;
  //  return totalPrice;
}

function decreaseNumber(id, display1, price) {
  const amount = document.getElementById(id).value;
  const currentAmount = parseFloat(amount);
  const totalAmount = currentAmount - 1;
  document.getElementById(id).value = totalAmount;
  // document.getElementById(display1).innerText = Price * totalAmount;
  var totalPrice1 = price * totalAmount;
  document.getElementById(display1).innerText = totalPrice1;

  if (totalAmount === 0) {
    alert("This number is invalid");
  }
  // return totalPrice1;
}
