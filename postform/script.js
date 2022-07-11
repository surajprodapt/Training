var loginform = document.getElementById("signup");

var api_url = "https://jsonplaceholder.typicode.com/users";
loginform.addEventListener("submit", async function (e) {
    e.preventDefault();

    var id = loginform.elements["id"].value;
    var name = loginform.elements["name"].value;
    var username = loginform.elements["username"].value;
    var email = loginform.elements["email"].value;
    var phone = loginform.elements["phone"].value;
    var website = loginform.elements["website"].value;


    let formData = {
        id,
        name,
        username,
        email, phone, website
    }

    const response = await fetch(api_url, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)
    })

    console.log(response)
})