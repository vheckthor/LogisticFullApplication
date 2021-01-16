$(document).ready(function () {

    (function() {
        'use strict';
        $("button").prop("disabled", true);
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
              },
              false);
              // $("button").prop("disabled", false),
        });
          },false);
        })();


        let signIn = {};
        signIn.email= $("#validationCustom04").val();
        signIn.password= $("#validationCustom03").val();

        // function disableButton() {
        //   if ((signIn.email != signUp.email) || (signIn.password != signUp.password)) {
        //     $("button").prop("disabled", true);
        //   }
        // }
        // disableButton();
        
        $("button").click(function () {
        
         $.getJSON("http://localhost:3000/signUp/", function(data) {
           console.log(data);
         });
  
     })


})


