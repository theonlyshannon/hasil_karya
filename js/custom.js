$(document).ready(function () {
    $('#example').DataTable({
        pageLength: 10, // Menampilkan 10 baris per halaman
        lengthMenu: [5, 10, 25, 50, 100], // Pilihan jumlah data yang dapat dilihat
        responsive: true, // Membuat tabel responsif
        language: {
            search: "Cari:",
            lengthMenu: "Tampilkan _MENU_ data",
            info: "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
            paginate: {
                first: "Awal",
                last: "Akhir",
                next: "Berikutnya",
                previous: "Sebelumnya"
            }
        }
    });
});


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

