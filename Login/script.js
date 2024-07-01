
function myFunc(e) {
    e.preventDefault();
    let userName = document.forms["myLoginForm"]["userInput"].value;
    let password = document.forms["myLoginForm"]["pasInput"].value

    const regexSimvol = /^[a-zA-Z\s]+$/;
    const regexNumber = /^[0-9]+$/;

    if (regexSimvol.test(userName) && regexNumber.test(password)) {
        window.location.href = "index2.html"
    } else {
        alert("Enter username and password correctly");
    }
}