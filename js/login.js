var loginform = document.getElementById("loginPage");
loginform.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(loginform.elements['uname'].value);
    if (uname.length < 7) {
        console.log("uname must be 7 char")
        return null;
        
    }
    console.log(loginform.elements['pswd'].value);
    console.log(loginform.elements['no'].value);

    var loginData = {
        username, password, number
    }
    console.log(loginData)
    console.log(JSON.stringify(loginData));
})
