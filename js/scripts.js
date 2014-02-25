var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
var Numbers = {
  // isValid: function() {
  //    if (this.number.length === 10 && ) {
  //     return
  //   }   
  // }
};

$(document).ready(function() {
  $("#add-number").click(function(){
    $("#numbers").append('<div class="number">' +
                            '<div class="form-group">' +
                               '<label for="new-number">Number</label>' +
                               '<input id="new-number" type="text" class="form-control">' +
                            '</div>' +
                         '</div>')
});

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;
    newContact.address = inputtedAddress;
    newContact.numbers = [];


    $(".number").each(function() {
      var inputtedNumber = $(this).find("input#new-number").val();
      var newNumber = Object.create(Numbers);
      newNumber.number = inputtedNumber;

      newContact.numbers.push(newNumber);
    });

 

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    
    $(".contact").last().click(function() {
      $("#show-contacts").show();

      $('#show-contacts h2').text(newContact.fullName());
      $('.firstname').text(newContact.firstName);
      $('.lastname').text(newContact.lastName);
      $('.address').text(newContact.address);
      
      $('ul#appendedNumbers').text("");
      newContact.numbers.forEach(function(object) {
        $('ul#appendedNumbers').append('<li>' + object.number + '</li>');
      });
    });

    this.reset();
  });
});











 
