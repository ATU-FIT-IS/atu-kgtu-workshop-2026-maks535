// ===== TIME =====
const timeBlock = document.getElementById("futureTime");

function updateTime(){
    const now = new Date();
    now.setFullYear(2035);

    timeBlock.textContent = 
        now.toLocaleDateString("ru-RU") + 
        " | " + 
        now.toLocaleTimeString("ru-RU");
}

setInterval(updateTime, 1000);
updateTime();



function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#00ffff";
        ctx.fill();
    });

    requestAnimationFrame(draw);
}

draw();


// ===== MOVING ROBOTS ANIMATION =====
const robots = document.querySelectorAll(".robot");
// ИСПРАВЛЕНИЕ: Выносим поиск контейнера из цикла анимации для лучшей скорости работы
const field = document.querySelector(".robot-field"); 

if (field) { // Проверяем, существует ли поле для роботов
    robots.forEach((r, i) => {
        let x = 50 + i * 80;
        let y = 50;

        let vx = 2 + i * 0.5;
        let vy = 1.5 + i * 0.3;

        function move(){
            const rect = field.getBoundingClientRect();

            x += vx;
            y += vy;

            // Учитываем размеры самого робота, чтобы они не вылетали за края поля
            const robotWidth = r.offsetWidth || 0;
            const robotHeight = r.offsetHeight || 0;

            if(x > rect.width - robotWidth || x < 0) vx *= -1;
            if(y > rect.height - robotHeight || y < 0) vy *= -1;

            // ИСПРАВЛЕНО: Добавлены косые кавычки (обратные апострофы)
            r.style.transform = `translate(${x}px, ${y}px)`;

            requestAnimationFrame(move);
        }

        move();
    });
}
