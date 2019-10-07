
history.pushState(null, null , location.href);
window.onpopstate = () => {
history.go(1);
};