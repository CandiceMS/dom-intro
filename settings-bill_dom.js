  var callSet = document.querySelector('.callCostSetting');
  var smsSet = document.querySelector('.smsCostSetting');
  var warningSet = document.querySelector('.warningLevelSetting');
  var criticalSet = document.querySelector('.criticalLevelSetting');

  //BUTTONS ELEMENTS TO UPDATE / CALCULATE
  var settingsAdd = document.querySelector('.settingsAddBtn');
  var updated = document.querySelector('.updateSettings');
  var billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings');

  //TOTALS ELEMENTS
  var totalCalls = document.querySelector('.callTotalSettings');
  var totalSms = document.querySelector('.smsTotalSettings');
  var totalWithSettings = document.querySelector('.totalSettings');

  var checkedBtnSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedBtnSettings){
      var selectedItem = checkedBtnSettings.value
    }

  var settingsBill = SettingsBill();

  function update_Settings() {
    callSet = settingsBill.value_Call();
    smsSet = settingsBill.value_Sms();
    warningSet = settingsBill.value_Warning();
    criticalSet = settingsBill.value_Critical();
  }

  function settingsBillDom() {

      totalCalls.innerHTML = settingsBill.calculatedCalls();
      totalSms.innerHTML = settingsBill.calculatedSms();
      totalWithSettings.innerHTML = settingsBill.calculatedTotal();

      if (totalWithSettings >= criticalSet){
        totalWithSettings.classList.add("danger");
      }
      if (totalWithSettings < criticalSet){
        totalWithSettings.classList.remove("danger");
      }

      if (totalWithSettings >= warningSet){
        totalWithSettings.classList.add("warning");
      }
      if (totalWithSettings < warningSet){
        totalWithSettings.classList.remove("warning");
      }
}
updated.addEventListener('click', update_Settings);
settingsAdd.addEventListener('click', settingsBillDom);
