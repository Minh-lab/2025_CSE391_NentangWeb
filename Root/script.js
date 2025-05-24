$(document).ready(function(){
        jQuery.validator.addMethod('valid_email', function (value) {
            var regex = /^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{1,5}$/;
            return value.trim().match(regex);
        });
        jQuery.validator.addMethod('valid_password', function(value){
            var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            return value.trim().match(regex);
        })
    $("#input").validate({
            rules:{
                "email":{
                    required: true,
                    valid_email:true  
                },
                "password":{
                    required:true,
                    valid_password:true
                },
            },
            highlight: function(element){
                const formControl = $(element).closest(".formControl");
                formControl.addClass("error").removeClass("success");
                
            }, 
            unhighlight: function(element){
                const formControl = $(element).closest(".formControl");
                formControl.addClass("success").removeClass("error");
                                formControl.find(".errorInform").html(errorMessages).hide();
            },
            errorPlacement:function(error,element){
                const formControl = $(element).closest(".formControl");
                errorMessages = "Invalid!";
                formControl.find(".errorInform").html(errorMessages).show();
            },

            
        })
        

    });
