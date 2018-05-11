describe('Select a radio button to calculate', function(){

    it('should return the calls total as R8.25 for 3 calls only', function(){

      var add_Calls = RadioBill();

        add_Calls.calculateCallSms('call');
        add_Calls.calculateCallSms('call');
        add_Calls.calculateCallSms('call');

    assert.equal(8.25, add_Calls.callsTotal());
    });

    it('should return the sms total as R3.00 for 4 sms only', function(){

      var add_Sms = RadioBill();

        add_Sms.calculateCallSms('sms');
        add_Sms.calculateCallSms('sms');
        add_Sms.calculateCallSms('sms');
        add_Sms.calculateCallSms('sms');

    assert.equal(3.00, add_Sms.smsTotal());
    });

    it('should return the grand total as R7.00 for 2 sms and 2 calls', function(){

      var add_Total = RadioBill();

        add_Total.calculateCallSms('call');
        add_Total.calculateCallSms('call');
        add_Total.calculateCallSms('sms');
        add_Total.calculateCallSms('sms');

        add_Total.totalCalculate();

    assert.equal(7.00, add_Total.totalReturn());
    });
});
