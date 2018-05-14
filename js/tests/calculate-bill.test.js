describe('Total cost', function(){

    it('should return the total as R8.25 for 0 sms and 3 calls', function(){
        assert.equal(totalPhoneBill('call, call, call'), 8.25);
    });
    it('should return the total as R4.25 for 2 sms and 1 call', function(){
        assert.equal(totalPhoneBill('sms, call, sms'), 4.25);
    });
});
