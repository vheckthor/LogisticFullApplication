
    (function() {
        'use strict';
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
              }, false);
            });
        }, false);
    })();
    
    
    $(document).ready(function () {
    let signUp = {}
     $("button").click(function (p) {
         p.preventDefault();
         signUp.name= $("#validationCustom01").val();
         signUp.email= $("#validationCustom04").val();
         signUp.password= $("#validationCustom03").val();
         signUp.confirm_password= $("#validationCustom05").val();
         
         $.ajax({
             url:"http://localhost:3000/signUp/",
             method:"POST",
             data:signUp,

             success: function(){
                alert("it is successful!");
                // $(".modal").css("visibility", "visible");
              },
              error: function(){
                alert("error!")
              }
         })
     })
})