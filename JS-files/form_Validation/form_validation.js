var u_name = document.login_form.u_name;
var nameAlert = document.getElementById('nameAlert');

function formValidation()
{
    if(u_name.value.length < 3)
    {
        nameAlert.innerHTML = "should more than 3 letter.";
        nameAlert.style.color = "red";
        nameAlert.style.backgroundColor = "yellow";
    
    }else{
        nameAlert.innerHTML = "";
    }
}

var u_pass = document.login_form.u_pass;
var passAlert = document.getElementById('passAlert');

function passValidation()
{
    if(u_pass.value.length < 6 )
    {
        passAlert.innerHTML = "should be more 6 characters."
        passAlert.style.color = "red";

    }else if (u_pass.value.length >= 6 && u_pass.value.length < 8 )
    {
        passAlert.innerHTML = "Medium.";
        passAlert.style.color = "lime";  
    }else if(u_pass.value.length >= 8)
    {
        passAlert.innerHTML = "Excellent.";
        passAlert.style.color = "green";
    }
}