  var addRadio = document.querySelector('.radioBillAddBtn');
  var callsTwo = document.querySelector('.callTotalTwo');
  var smsTwo = document.querySelector('.smsTotalTwo');
  var totalBoth = document.querySelector('.totalTwo');

  var checkedBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedBtn) {
    var billItemType = checkedBtn.value;
  }

  var radioBill = RadioBill();

function radioBillDom() {

    callsTwo.innerHTML = radioBill.callsTotal();
    smsTwo.innerHTML = radioBill.smsTotal();
    totalBoth.innerHTML = radioBill.totalReturn();

    if (totalBoth >= 50){

        totalBoth.classList.add("danger");
    }
    else if (totalBoth >= 30){
        totalBoth.classList.add("warning");
    }
  }
    addRadio.addEventListener('click', radioBillDom);
