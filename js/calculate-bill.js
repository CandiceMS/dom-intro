function totalPhoneBill(enterText){

  var totalBill = 0;

  var usageSplit = enterText.split(",");
  for (var i = 0; i < usageSplit.length; i++){
    if (usageSplit[i].trim() === "call"){
      totalBill += 2.75;
    }
    else if (usageSplit[i].trim() === "sms"){
    totalBill += 0.75;
    }
  }
  return totalBill.toFixed(2);
}
