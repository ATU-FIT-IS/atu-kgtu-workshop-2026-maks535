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
        "Текущее время университета: <br>" +
        futureDate.toLocaleString('ru-RU', options);
}

updateFutureTime();
setInterval(updateFutureTime, 1000);

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,255,0.25), rgba(255,255,255,0.05))`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "rgba(255,255,255,0.05)";
    });
});
