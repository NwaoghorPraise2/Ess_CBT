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
    if (username === Uname && password === Pword) {
        alert("welcome");
        window.location.assign("./pages/adminHome.html");
    } else {
        alert("Incorrect try again!!!");
    }
};

history.pushState(null, null, location.href);
window.onpopstate = () => {
    history.go(1);
};