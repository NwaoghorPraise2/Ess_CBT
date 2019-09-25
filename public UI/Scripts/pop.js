const name = document.getElementById("name");
const name1 = document.getElementById("name1");
const email = document.getElementById("email");
const num = document.getElementById("num");
const submit = document.getElementById("submit");

goto = () => {
    if (name.value && name1.value && email.value && num.value) {
        e.preventDefault();
        window.location.assign(`./pop.html`);
    } else {
        alert("Please fill every field");
    }
};

//this page to be worked on..