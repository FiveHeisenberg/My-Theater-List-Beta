
// Toggle Visabilitas Password
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = '🙉';
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = '🙈';
    }
}
//

// Form Login
let username = document.getElementById('username');
let password = document.getElementById('password');

function userLogin() {
    console.log(username.value);
    if (username.value === "admin" && password.value === "admin123") {
        window.location.href = 'index.html'  
    }
}
//

// Ketika Klik Enter akan Menekan Button Login
document.getElementById('username').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Mencegah aksi default
        document.getElementById('loginButton').click(); // Menekan tombol LOGIN
    }
});

document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Mencegah aksi default
        document.getElementById('loginButton').click(); // Menekan tombol LOGIN
    }
});