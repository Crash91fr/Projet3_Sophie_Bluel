//code JavaScript pour la page de login

const form = document.querySelector(".login-form")

form.addEventListener("submit", (event) => {
    
    event.preventDefault();
    console.log("no reloading");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
});

