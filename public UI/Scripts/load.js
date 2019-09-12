const min = document.getElementById("min");
let time = 50;

let emm = setInterval(()=>{
min.innerText = time;
time -= 1;
if (time === 0){
    window.location.assign(`./text_page.html`);
    clearInterval(emm);
}
}, 1000);

