let login = document.getElementById('login');
let key = localStorage.getItem("user");
let navAcc = document.getElementsByClassName('nav-acc');
let accCheck = 0;

if (localStorage.getItem('user') === "admin" || key) {
    login.style.display = "none";
    logout.style.display = "block";
    accCheck = 1
} else {
    login.style.display = "block";
}

function userAcc() {
    if (accCheck === 1) {
        logOut();
    } else if (accCheck === 0) {
        logIn();
    }
}

function logIn() {
    window.location.href = 'login.html';
}

function logOut() {
    localStorage.clear();
    location.reload();
}