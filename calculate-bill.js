function totalPhoneBill(enterText){
  var usageSplit = enterText.split(",");
  var totalBill = 0;
  for (var i = 0; i < usageSplit.length; i++){
    if (usageSplit[i].trim() === "call"){
      totalBill += 2.75;
    }
    else if (usageSplit[i].trim() === "sms"){
    totalBill += 0.75;
    }
  }
  return "R"+totalBill.toFixed(2);
}
