describe('Contact', function() {
  describe('fullName', function() {
    it('combines the first and last name, separated by a space', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Dolly";
      testContact.lastName = "Parton";
      testContact.fullName().should.equal("Dolly Parton");
    });
  });
});
describe("PhoneNumbers", function() {
   describe('isValid', function(){
    it('verifies the phone number validity', function(){
      var testPhone = Object.create(PhoneNumbers);
      testPhone.number = 1234567890;
      testPhone.isValid().should.equal(true);
    });
  });
});
