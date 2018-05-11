function calculateBillDom (totalPhoneBill){
  var myCalButton = document.querySelector('.calculateBtn');
  var myBillTotal = document.querySelector('.billTotal');
  var myBillString = document.querySelector('.billString');

    myBillTotal.innerHTML = totalPhoneBill;

    if (totalPhoneBill > 20.00) {
      myBillTotal.classList.add("warning");
    }
    if (totalPhoneBill < 20.00) {
      myBillTotal.classList.remove('warning')
    }
    if (totalPhoneBill > 30.00) {
      myBillTotal.classList.add("danger");
    }
    if (totalPhoneBill < 30.00) {
      myBillTotal.classList.remove("danger")
    }
}
myCalButton.addEventListener('click', calculateBillDom);
