// ===== TIME =====
function updateTime(){
    const now = new Date();
    now.setFullYear(2035);

    document.getElementById("time").textContent =
        now.toLocaleDateString("ru-RU") +
        " | " +
        now.toLocaleTimeString("ru-RU");
}

setInterval(updateTime, 1000);
updateTime();


// ===== FLOATING FORMULAS (Новая анимация) =====
const formulas = [
    "E = mc²",
    "F = ma",
    "a = Δv / Δt",
    "λ = h / p",
    "PV = nRT",
    "ΔG < 0",
    "F = kx",
    "∇ · E = ρ/ε₀"
];

function spawnFormula(){
    const el = document.createElement("div");
    el.className = "formula";
    el.textContent = formulas[Math.floor(Math.random() * formulas.length)];

    // Корректный расчет ширины, чтобы формулы не улетали за правый край экрана
    const startX = Math.random() * (window.innerWidth - 100);
    el.style.left = startX + "px";
    el.style.top = (window.innerHeight - 50) + "px";

    document.body.appendChild(el);

    // Удаляем элемент после завершения его CSS-анимации
    setTimeout(() => el.remove(), 5000);
}

setInterval(spawnFormula, 700);


// ===== BACKGROUND ENERGY SHIFT =====
let hue = 180;
// Оптимизация: ищем фон один раз, а не каждые 50 миллисекунд
const backgroundEl = document.querySelector(".background"); 

if (backgroundEl) {
    setInterval(() => {
        hue = (hue + 1) % 360; // Сброс на 0 при достижении 360, чтобы избежать бесконечного роста числа

        // ИСПРАВЛЕНО: Строка обернута в косые кавычки `` ` `` для работы интерполяции
        backgroundEl.style.filter = `hue-rotate(${hue}deg) blur(50px)`;
    }, 50);
}
