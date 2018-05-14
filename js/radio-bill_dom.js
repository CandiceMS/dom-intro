  var addRadio = document.querySelector('.radioBillAddBtn');
  var callsTwo = document.querySelector('.callTotalTwo');
  var smsTwo = document.querySelector('.smsTotalTwo');
  var totalBoth = document.querySelector('.totalTwo');

  var checkedBtn = document.querySelector("input[name='billItemType']:checked");

  var radioBill = RadioBill();

function radioBillDom() {

  if (checkedBtn) {
    var billItemType = checkedBtn.value;
  }
  
  radioBill.calculateCallSms(billItemType);
  radioBill.totalCalculate(billItemType);

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
