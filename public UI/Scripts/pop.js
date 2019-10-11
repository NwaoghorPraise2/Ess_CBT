const name = document.getElementById("name");
const name1 = document.getElementById("name1");
const email = document.getElementById("email");
const num = document.getElementById("num");
const submit = document.getElementById("submit");

goto = e => {
    if (name.value && name1.value && email.value && num.value) {
        e.preventDefault();
        let data = {
            firstName: name.value,
            lastName: name1.value,
            email: email.value,
            phone: num.value
        };
        fetch("/user_exam", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        }).catch(err => {
            throw err;
        });
        window.location.assign(`pop.html`);
    } else {
        alert("Hello Dear, please fill correctly!!!");
    }
};