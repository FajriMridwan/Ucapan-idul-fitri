const submitUsername = document.getElementById('submitUsername');
const usernameField = document.getElementById('username');
const usernameInput = document.getElementById('usernameInput');
const mainContent = document.getElementById('mainContent');
const greeting = document.getElementById('greeting');
const forgiveBtn = document.getElementById('forgiveBtn');
const notForgiveBtn = document.getElementById('notForgiveBtn');
const response = document.getElementById('response');

const notForgiveResponses = [
    "Yakin? Masa Idul Fitri nggak saling memaafkan? 😢",
    "Coba pikir lagi, kan aku udah minta maaf tulus banget nih! 🥺",
    "Waduh, kayaknya tombol ini error deh… Coba pencet yang satunya 😆"
];

let notForgiveCount = 0;

// Event listener untuk tombol submit username
submitUsername.addEventListener('click', () => {
    const username = usernameField.value.trim();
    if (username) {
        // Sembunyikan input username dengan fade out
        usernameInput.style.opacity = '0';
        setTimeout(() => {
            usernameInput.style.display = 'none'; // Sembunyikan setelah fade out
        }, 500); // Waktu yang sama dengan durasi transisi CSS

        // Tampilkan konten utama dengan fade in
        mainContent.style.display = 'block'; // Tampilkan konten utama
        mainContent.style.opacity = '0'; // Set opacity ke 0 untuk memulai fade in
        setTimeout(() => {
            mainContent.classList.add('show'); // Tambahkan kelas show untuk animasi fade in
            mainContent.style.opacity = '1'; // Ubah opacity menjadi 1
        }, 10); // Sedikit delay untuk memastikan transisi berfungsi

        // Tampilkan pesan selamat dengan username
        greeting.textContent = `Selamat Hari Raya Idul Fitri, ${username}!`;
        usernameField.value = ''; // Kosongkan input setelah submit
    } else {
        alert("Silakan masukkan username!");
    }
});

// Event listener untuk tombol "Maafin aku"
forgiveBtn.addEventListener('click', () => {
    response.textContent = "YES! Terima kasih! Selamat Idul Fitri, semoga kita selalu dalam keberkahan dan kebahagiaan. 🌟";
    notForgiveBtn.disabled = true; // Nonaktifkan tombol "Enggak"
});

// Event listener untuk tombol "Enggak"
notForgiveBtn.addEventListener('click', () => {
    if (notForgiveCount < notForgiveResponses.length) {
        response.textContent = notForgiveResponses[notForgiveCount];
        notForgiveCount++;
    } else {
        notForgiveBtn.textContent = "Maafin aku"; // Ubah tombol "Enggak" menjadi "Maafin aku"
        notForgiveBtn.disabled = true; // Nonaktifkan tombol "Enggak"
    }
});