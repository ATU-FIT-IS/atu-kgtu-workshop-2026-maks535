// ===== VR TIME =====
function updateTime(){
    const now = new Date();
    now.setFullYear(2035);

    const timeEl = document.getElementById("time");
    if (timeEl) {
        timeEl.textContent =
            now.toLocaleDateString("ru-RU") +
            " | " +
            now.toLocaleTimeString("ru-RU");
    }
}

setInterval(updateTime, 1000);
updateTime();


// ===== CAMERA DRIFT EFFECT =====
let x = 0;
let y = 0;
// Оптимизация: ищем элемент сцены один раз при старте
const sceneEl = document.querySelector(".scene"); 

if (sceneEl) {
    document.addEventListener("mousemove", (e)=>{
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;

        x = (e.clientX - cx) / cx;
        y = (e.clientY - cy) / cy;

        // ИСПРАВЛЕНО: Строка обернута в косые кавычки `` ` ``
        sceneEl.style.transform = `rotateX(${y * 5}deg) rotateY(${x * 5}deg)`;
    });
}


// ===== CARD FLOATING MICRO MOVEMENT =====
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // ИСПРАВЛЕНО: Строка обернута в косые кавычки `` ` ``
        card.style.transform = `scale(1.08) rotateX(${(y - 0.5) * -10}deg) rotateY(${(x - 0.5) * 10}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        // Здесь косые кавычки не нужны, так как нет переменных, но обычные кавычки обязательны
        card.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
    });
});
