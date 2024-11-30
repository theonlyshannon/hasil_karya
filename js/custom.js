document.querySelectorAll('.link-label').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelectorAll('.link-label').forEach(function(link) {
            link.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    // Toggle password visibility
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // Toggle icon
    this.classList.toggle('bi-eye');
    this.classList.toggle('bi-eye-slash');
});

