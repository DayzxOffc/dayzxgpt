// ========================================================
// 1. Cek Login (WAJIB LOGIN SEBELUM MASUK INDEX.HTML)
// ========================================================
(function () {
    const loggedIn = localStorage.getItem("logged_in");

    // Jika belum login, jangan izinkan masuk index.html
    // dan halaman lain selain login.html
    const currentPage = window.location.pathname.split("/").pop();

    if (!loggedIn && currentPage !== "login.html") {
        window.location.href = "login.html";
    }
})();


// ========================================================
// 2. Konfigurasi Aplikasi
// ========================================================
const CONFIG = {
    APP_NAME: 'WormGpt',

    // API model atau lainnya (opsional, sesuai kebutuhan)
    MODEL_NAME: 'gemini-2.5-flash-preview-09-2025',
    MAX_TOKENS: 4096,

    // API Keys (bebas isi)
    API_KEYS: [
        "AIzaSyAiy9_KNVe6BTcyEqXpr5PTpZGG2M4OM-Q",
        "AIzaSyC9cVU2p0SwHarQ4tDbYcstPnoKswOPb5U",
        "AIzaSyBaX_MqkzbVPeB7LCAPo5n_oLYbBs75fO0",
        "AIzaSyCAUfB30nezOYK_r5DwoRIdajSXNCftwps"
    ]
};


// ========================================================
// 3. Fungsi Logout (Opsional)
// ========================================================
function logout() {
    localStorage.removeItem("logged_in");
    window.location.href = "login.html";
}
 l
