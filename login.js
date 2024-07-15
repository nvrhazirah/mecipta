$(function(){ //ready function
    $('#btnRegister').click(function(){
        location.href='register.html'
    });

    $('#frmLogin').click(function(e){
        e.preventDefault();  //kena buat klau servlet xyah tp js kena buat
        e.stopPropagation();
        
        var email = $('#email').val();
        var password = $('#password').val();
        var datalist = "email="+email+"&password="+password1;

        $.ajax({
            type:'post',
            url: "https://bengkel.odaje.biz/VerifyingLogin.php",
            data: datalist,
            cache: false,
            success: function(mydata){
                var newdata = JSON.parse(mydata);
                if(newdata == 1){
                    sessionStorage.loggedin=newdata.name;
                    alert(newdata.msg);
                    location.href="index.html";
                }else{
                    alert(newdata.msg);
                }
            },
            error:function(){
                console.log("Ajax error");
                    alert("Please contact admin!");
                
            }

        });
    });
})