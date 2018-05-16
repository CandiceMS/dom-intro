var callSet = document.querySelector('.callCostSetting');
var smsSet = document.querySelector('.smsCostSetting');
var warningSet = document.querySelector('.warningLevelSetting');
var criticalSet = document.querySelector('.criticalLevelSetting');

  //BUTTONS ELEMENTS TO UPDATE / CALCULATE
var settingsAdd = document.querySelector('.settingsAddBtn');
var updated = document.querySelector('.updateSettings');

  //RADIO BUTTONS
var checkedBtnWithSettings = document.querySelectorAll('.billItemTypeWithSettings');

  //TOTALS ELEMENTS
var totalCalls = document.querySelector('.callTotalSettings');
var totalSms = document.querySelector('.smsTotalSettings');
var totalWithSettings = document.querySelector('.totalSettings');

var settingsBill = SettingsBill();

  function update_Settings() {
    CallSet = settingsBill.value_Call(callSet.value);
    SmsSet = settingsBill.value_Sms(smsSet.value);
    WarningSet = settingsBill.value_Warning(warningSet.value);
    CriticalSet = settingsBill.value_Critical(criticalSet.value);
  }

  function settingsBillDom() {

    var checked = '';

    for (var i = 0; i < checkedBtnWithSettings.length; i++) {
      if (checkedBtnWithSettings[i].checked) {
        checked = checkedBtnWithSettings[i].value;
      }
    }

    settingsBill.calculate_CallSms(checked);
    settingsBill.calculate_Total();

      totalCalls.innerHTML = settingsBill.calculatedCalls();
      totalSms.innerHTML = settingsBill.calculatedSms();
      totalWithSettings.innerHTML = settingsBill.calculatedTotal();

      if (settingsBill.calculatedTotal() >= CriticalSet) {
        totalWithSettings.classList.add("danger");
      }
      if (settingsBill.calculatedTotal() < CriticalSet){
        totalWithSettings.classList.remove("danger");
      }

      if (settingsBill.calculatedTotal() >= WarningSet){
        totalWithSettings.classList.add("warning");
      }
      if (settingsBill.calculatedTotal() < WarningSet){
        totalWithSettings.classList.remove("warning");
      }
}
updated.addEventListener('click', update_Settings);
settingsAdd.addEventListener('click', settingsBillDom);
