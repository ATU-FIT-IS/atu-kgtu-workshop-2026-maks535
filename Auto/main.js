// ===== TIME (2035 + live real time) =====

const timeBlock = document.getElementById("futureTime");

function updateTime(){

    const now = new Date();
    now.setFullYear(2035);

    const formatted =
        now.toLocaleDateString("ru-RU") +
        " | " +
        now.toLocaleTimeString("ru-RU");

    timeBlock.classList.remove("flip");
    void timeBlock.offsetWidth;
    timeBlock.classList.add("flip");

    timeBlock.textContent = formatted;
}

updateTime();
setInterval(updateTime, 1000);


// ===== COUNTERS =====

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.dataset.target;
    let value = 0;

    const step = target / 120;

    function animate(){
        if(value < target){
            value += step;
            counter.textContent = Math.floor(value);
            requestAnimationFrame(animate);
        }else{
            counter.textContent = target;
        }
    }

    animate();
});


// ===== CARD LIGHT FOLLOW EFFECT =====

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseleave", () => {
        card.style.background = "rgba(255,255,255,0.05)";
    });

});


// ===== PARTICLES SYSTEM =====

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const particles = [];

for(let i = 0; i < 100; i++){

    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        vx: (Math.random()-0.5)*0.6,
        vy: (Math.random()-0.5)*0.6,
        size: Math.random()*2+1
    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p => {

        p.x += p.vx;
        p.y += p.vy;

        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fillStyle = "#00ffff";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();