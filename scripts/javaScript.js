// selectors 
let phoneDecreaseButton = document.querySelector('#phone-decrease-button')
let phoneItemNumber = document.querySelector('#phone-item-number')
let phoneIncreaseButton = document.querySelector('#phone-increase-button')
let phonePrice = document.querySelector('#phone-price')
let removePhone = document.querySelector('#remove-phone')
let removePhoneArea = document.querySelector('#remove-phone-area');

let caseDecreaseButton = document.querySelector('#case-decrease-button')
let caseItemNumber = document.querySelector('#case-item-number')
let caseIncreaseButton = document.querySelector('#case-increase-button')
let casePrice = document.querySelector('#case-price')
let removeCase = document.querySelector('#remove-case')
let removeCaseArea = document.querySelector('#remove-case-area');

let subTotal = document.querySelector('#sub-total')
let tax = document.querySelector('#tax')
let total = document.querySelector('#total')

//phone increase button handler
phoneIncreaseButton.addEventListener('click', ()=>{
    // phoneItemNumber.value = parseFloat(phoneItemNumber.value) + 1 ;
    // phonePrice.innerText = phoneItemNumber.value * 1219; // 1219 is the price of phone

    // subTotal.innerText =  parseFloat(phonePrice.innerText) + parseFloat(casePrice.innerText) ;
    // tax.innerText = (parseFloat(subTotal.innerText))* (5/100);
    // tax.innerText = parseFloat(tax.innerText).toFixed(2);
    // total.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText)
    increase(phoneItemNumber, phonePrice,1219);
    transaction(subTotal, phonePrice, casePrice, tax, total)
})


// phone decrease button handler
phoneDecreaseButton.addEventListener('click', ()=>{
    Decrease(phoneItemNumber, phonePrice,1219)
    transaction(subTotal, phonePrice, casePrice, tax, total)
})

// case increase handler
caseIncreaseButton.addEventListener('click', ()=>{
    increase(caseItemNumber, casePrice,59);
    transaction(subTotal, phonePrice, casePrice, tax, total)
})

// case decrease handler
caseDecreaseButton.addEventListener('click', ()=>{
    Decrease(caseItemNumber, casePrice,59)
    transaction(subTotal, phonePrice, casePrice, tax, total)
})

// remove item
removePhone.addEventListener('click', (event)=>{
    removePhoneArea.remove();
})

removeCase.addEventListener('click', ()=>{
    removeCaseArea.remove();
} )


// created function for avoiding duplicate code
function increase(item, price, value){
    item.value = parseFloat(item.value) + 1 ;
    // if (parseFloat(item.value) < 0){
    //     alert("Negative number don't  allow here!")
    // }
    console.log(item.value);
    price.innerText = item.value * value;

}

function Decrease(item, price, value){
    item.value = parseFloat(item.value) - 1 ;
    if (parseFloat(item.value) < 0){
        alert("Negative number don't allow here!")
    }
    console.log(item.value);

    price.innerText =  item.value * value;
}

function transaction(subTotal, phonePrice, casePrice, tax, total){
    subTotal.innerText =  parseFloat(phonePrice.innerText) + parseFloat(casePrice.innerText) ;
    tax.innerText = (parseFloat(subTotal.innerText))* (5/100);
    tax.innerText = parseFloat(tax.innerText).toFixed(2);
    total.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText)

}