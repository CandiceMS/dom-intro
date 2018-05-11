function TextBillTotal(input){

  var calls = 0;
  var sms = 0;
  var totalCost = 0;

  function calculation(input) {
    if (input === "call") {
      calls += 2.75;
    }
    if (input === "sms") {
      sms += 0.75;
    }
  }

  function returnCalls() {
    return calls.toFixed(2);
  }

  function returnSms() {
    return sms.toFixed(2);
  }

  function totalCallSms() {
    totalCost = calls + sms;
  }
  function returnTotal() {
    return totalCost.toFixed(2);
  }

  return {
    calculation,
    returnCalls,
    returnSms,
    totalCallSms,
    returnTotal
  }
}
