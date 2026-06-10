function updateFutureTime() {

    const now = new Date();

    const futureDate = new Date(now);

    futureDate.setFullYear(2035);

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    document.getElementById("futureTime").innerHTML =
        futureDate.toLocaleString('ru-RU', options);
}

updateFutureTime();
setInterval(updateFutureTime, 1000);



const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const update = () => {

        const increment = target / 100;

        if(current < target){

            current += increment;

            counter.textContent = Math.floor(current);

            requestAnimationFrame(update);

        }else{

            counter.textContent = target;
        }
    };

    update();
});



document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,0.05)";
    });

});