function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("pass").value;
if (username=="admin" && password == "user")
{
   
    window.location.href = "/main.html";
    alert("Login Sucessfully");
    
    
    return false;
}
else
{
    alert("Login Failed");
}
}