function validate(){
    var username = document.getElementById("username").value;
    if ( username == "Duong Thi Thu Hang"){
        alert ("Login successfully");
        window.location = "heart.html"; // Redirecting to other page.
        return false;
    }
    else{
        alert("You are not Sao who I know, right ?");
        return false;
    }
}