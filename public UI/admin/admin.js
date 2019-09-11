//window.alert('we dao wpork oh......');

const btn = document.getElementById("btn");

username.addEventListener("keyup", () => {
    Btn.disabled = !username.value;
});
password.addEventListener("keyup", () => {
    btn.disabled = !password.value;
});

login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const Uname = "admin";
    const Pword = "praise";
    //e.preventDefault();
    if (username === Uname && password === Pword) {
        alert("welcome");
        window.location.assign("adminHome.html");
    } else {
        alert("Incorrect try again!!!");
    }
};