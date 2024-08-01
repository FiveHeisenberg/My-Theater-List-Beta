let login = document.getElementById('login');
let key = localStorage.getItem("user");

if (localStorage.getItem('user') === "admin" || key) {
    login.style.display = "none";
    logout.style.display = "block";
} else {
    login.style.display = "block";
}

function logOut() {
    localStorage.clear();
    window.location.href = 'login.html';
}