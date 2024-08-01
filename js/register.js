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

// Data Sekali Login
let username = document.getElementById("username");
let password = document.getElementById("password");

function userRegister() {
    localStorage.setItem("user", username.value);
    localStorage.setItem("password", password.value);
    window.location.href = 'login.html'
}
//

// Ketika Klik Enter akan Menekan Button Login
document.getElementById('username').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Mencegah aksi default
        document.getElementById('registerButton').click(); // Menekan tombol LOGIN
    }
});

document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Mencegah aksi default
        document.getElementById('registerButton').click(); // Menekan tombol LOGIN
    }
});
//