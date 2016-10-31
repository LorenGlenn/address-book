function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

$(document).ready(function (){

  $("#contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $('input#firstName').val();
    var inputtedLastName = $('input#lastName').val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $('ul#contacts').append('<li>' + newContact.firstName + '</li>');

    $("input#firstName").val("");
    $("input#lastName").val("");

  });

});
