/*JavaScript added on this page */

jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function confirmSignUp(){
  var answer = confirm("Are you ready to join the league?");
    if (answer == true) {
      alert("Welcome to the league!");
    }
    else{
      alert("We hope you join a team soon!");
    }
}

function validationEvent() {
  var a = document.forms["form-one"]["full-name"].value;
  var b = document.forms["form-one"]["last-name"].value;
  var c = document.forms["form-one"]["email"].value;
  var d = document.forms["form-one"]["phone-num"].value;
  var e = document.forms["form-one"]["dob"].value;
  if (a == "" || b == "" || c == ""){
    alert("All of the sections must be filled out.")
  }
  else{
    confirmSignUp();
  }
}

  var q1 = document.getElementById('sub-button');
  q1.addEventListener('click',validationEvent)
