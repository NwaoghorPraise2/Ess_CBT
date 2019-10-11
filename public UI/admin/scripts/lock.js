history.pushState(null, null, location.href);
window.onpopstate = () => {
    history.go(1);
};

const q = document.getElementById("Equestion");
const c1 = document.getElementById("Echioce1");
const c2 = document.getElementById("Echioce2");
const c3 = document.getElementById("Echioce3");
const c4 = document.getElementById("Echioce4");
const ans = document.getElementById("Eanswer");
const ok = document.getElementById("res");
create = e => {
    if (q.value && c1.value && c2.value && c3.value && c4.value && ans.value) {
        e.preventDefault();
        let data = {
            Question: q.value,
            Chioce1: c1.value,
            Chioce2: c2.value,
            Chioce3: c3.value,
            Chioce4: c4.value,
            Answer: ans.value
        };
        fetch("/add_question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        }).catch(err => {
            throw err;
        });
        ok.innerHTML = "One Question Added!!!";
        setTimeout(rss => {
            ok.innerHTML = " ";
            q.value = " ";
            c1.value = " ";
            c2.value = " ";
            c3.value = " ";
            c4.value = " ";
            ans.value = " ";
        }, 1000);
    } else {
        alert("Admin makes all fields are fill out properly");
    }
};