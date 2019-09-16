const name = document.getElementById("name");
const name1 = document.getElementById("name1");
const email = document.getElementById("email");
const num = document.getElementById("num");
const submit = document.getElementById("submit");

submit.addEventListener("click", goto(event));

goto = e => {
    if (name.value && name1.value && email.value && num.value) {
        e.preventDefault();
        window.location.assign(`./pop.html`);
    } else {
        alert("Please fill every field");
    }
};

window.onbeforeunload = () => {
    return "Your work will be lost.";
};