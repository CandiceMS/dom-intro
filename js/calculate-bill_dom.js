var myCalButton = document.querySelector('.calculateBtn');
var myBillTotal = document.querySelector('.billTotal');
var myBillString = document.querySelector('.billString');

function calculateBillDom (){

    myBillTotal.innerHTML = totalPhoneBill(myBillString.value);

    if (totalPhoneBill(myBillString.value) > 20.00) {
      myBillTotal.classList.add("warning");
    }
    if (totalPhoneBill(myBillString.value) < 20.00) {
      myBillTotal.classList.remove('warning')
    }
    if (totalPhoneBill(myBillString.value) > 30.00) {
      myBillTotal.classList.add("danger");
    }
    if (totalPhoneBill(myBillString.value) < 30.00) {
      myBillTotal.classList.remove("danger")
    }
}

myCalButton.addEventListener('click', calculateBillDom);
