function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

function Address(inputtedStreet, inputtedCity, inputtedState) {
  this.inputtedStreet = inputtedStreet;
  this.inputtedCity = inputtedCity;
  this.inputtedState = inputtedState;
}

$(document).ready(function (){

  $("#contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $('input#firstName').val();
    var inputtedLastName = $('input#lastName').val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    console.log(newContact);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find('input.newStreet').val();
      var inputtedCity = $(this).find('input.newCity').val();
      var inputtedState = $(this).find('input.newState').val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
    });

    $('ul#contacts').append('<li>' + newContact.firstName + '</li>');
    $("input#firstName").val("");
    $("input#lastName").val("");
  });
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control newStreet">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control newCity">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control newState">' +
                                 '</div>' +
                               '</div>');
  });

});
