  var addRadio = document.querySelector('.radioBillAddBtn');
  var callsTwo = document.querySelector('.callTotalTwo');
  var smsTwo = document.querySelector('.smsTotalTwo');
  var totalBoth = document.querySelector('.totalTwo');

  var checked_Btn = document.querySelectorAll('.billItemTypeRadio');

// var checked_Btn = document.querySelector("input[name='billItemType']:checked");
//  if (checked_Btn) {
//      var billItemType = checked_Btn.value
//}

  // console.log(checked_Btn);
  // console.log(checked_Btn[0].value);
  // console.log(checked_Btn[1].value);

  var radioBill = RadioBill();

function radioBillDom() {
  var checkedBtn = '';

  for (var i = 0; i < checked_Btn.length; i++) {
    if (checked_Btn[i].checked) {
      checkedBtn = checked_Btn[i].value;
    }
  }

  radioBill.calculateCallSms(checkedBtn);
  radioBill.totalCalculate();

    callsTwo.innerHTML = radioBill.callsTotal();
    smsTwo.innerHTML = radioBill.smsTotal();
    totalBoth.innerHTML = radioBill.totalReturn();

    if (radioBill.totalReturn() >= 50){

        totalBoth.classList.add("danger");
    }
    else if (radioBill.totalReturn() >= 30){
        totalBoth.classList.add("warning");
    }
  }
    addRadio.addEventListener('click', radioBillDom);
