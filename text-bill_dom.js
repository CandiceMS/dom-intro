  var input = document.querySelector('.billTypeText');
  var addBtn = document.querySelector('.addToBillBtn');
  var callsTotal = document.querySelector('.callTotalOne');
  var smsTotal = document.querySelector('.smsTotalOne');
  var total = document.querySelector('.totalOne');

  var textBillTotal = TextBillTotal();

  function textBillDom(){

      callsTotal.innerHTML = textBillTotal.returnCalls();
      smsTotal.innerHTML = textBillTotal.returnSms();
      total.innerHTML = textBillTotal.returnTotal();

      if (total >= 50){

          total.classList.add("danger");
      }
      else if (total >= 30){
          total.classList.add("warning");
      }
}
addBtn.addEventListener('click', textBillDom);
