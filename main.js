$(document).ready(function(){
    $('.menu-toggler').on('click',function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click',function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click',function(){
        $('html,body').animate(keyframes,{
            scrollTop: $($(this).attr('href')).offset().top -100,
    },options,2000)
    });
  

    $('#up').on('click',function(){
        $('html,body').animate(keyframes,{
            scrollTop: 0,
        },options,2000);
    });

    AOS.init({
        easing:'ease',
        duration:1800,
        once:true
    });
});




 
function validation(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    var error=document.getElementById("error");
    var text;
    
    if(name.length<2){
        text="*Please enter a valid name!";
        error.innerHTML=text;
        return false;
    }
    if(isNaN(phone)|| phone.length!=10){
        text="*Please enter a valid phone number!";
        error.innerHTML=text;
        return false;
    }
    if(email.indexOf("@")==-1|| email.length<10){
        text="*Please enter a valid email id!";
        error.innerHTML=text;
        return false;
    }
    if(message.length<20){
        text="*Please enter a valid message of more than 140 characters!";
        error.innerHTML=text;
        return false;
    }
    alert("Form submitted successfully !!");
    return true;
}