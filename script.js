// Menü Toggle (Responsive Navbar)
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

// Timer (Geri Sayım)
function updateTimer() {
    const targetDate = new Date("April 18, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerText = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown").innerText = "Event Started!";
    }

    
}

// Timer'ı her saniyede bir güncelle
setInterval(updateTimer, 1000);
updateTimer();
