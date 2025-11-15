// TAMPILKAN TAHUN OTOMATIS DI FOOTER
document.getElementById("current-year").textContent = new Date().getFullYear();

// TAMPILKAN WAKTU REALTIME DI FOOTER
function updateTime() {
    const time = new Date().toLocaleString("id-ID", {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    document.getElementById("current-time").textContent = time;
}
setInterval(updateTime, 1000);

// MODE GELAP / TERANG
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Mode Terang";
    } else {
        themeBtn.textContent = "Mode Gelap";
    }

    // Simpan ke localStorage
    localStorage.setItem("theme", document.body.classList.contains("dark-mode"));
});

// AMBIL TEMA TERAKHIR DARI LOCALSTORAGE
if (localStorage.getItem("theme") === "true") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "Mode Terang";
}

// FORM KONTAK (POPUP ALERT SAAT KIRIM)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Pesan berhasil dikirim! Terima kasih telah menghubungi saya.");
        contactForm.reset();
    });
}
