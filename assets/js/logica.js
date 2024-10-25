document.addEventListener("DOMContentLoaded", () => {
    // Objeto que contiene la diferencia horaria para cada ciudad
    const cities = [
        { id: "india", name: "Nueva Delhi", offset: 5.5, flag: "./assets/images/india.png" },
        { id: "bali", name: "Bali", offset: 8, flag: "./assets/images/indonesia.png" },
        { id: "venezuela", name: "Caracas", offset: -4, flag: "./assets/images/venezuela.png" },
        { id: "paris", name: "París", offset: 1, flag: "./assets/images/france.png" },
        { id: "london", name: "Londres", offset: 0, flag: "./assets/images/uk.png" },
        { id: "newyork", name: "Nueva York", offset: -5, flag: "./assets/images/usa.png" },
        { id: "stpetersburg", name: "San Petersburgo", offset: 3, flag: "./assets/images/russia.png" },
        { id: "beijing", name: "Beijing", offset: 8, flag: "./assets/images/china.png" },
        { id: "seoul", name: "Seúl", offset: 9, flag: "./assets/images/korea.png" }
    ];
  // Actualiza el tiempo de una ciudad específica
  const updateTime = (elementId, offset) => {
    const utcDate = new Date();
    const localTime = new Date(utcDate.getTime() + (offset * 60 * 60 * 1000) + (utcDate.getTimezoneOffset() * 60 * 1000));
    const timeString = localTime.toTimeString().split(' ')[0].slice(0, 5);
    document.getElementById(elementId).innerText = timeString;
};

// Inicializa el reloj de Santiago
setInterval(() => updateTime("time-santiago", -3), 1000);

// Muestra cada zona horaria con un retraso
cities.forEach((city, index) => {
    setTimeout(() => {
        const container = document.createElement("div");
        container.className = "col-12 mb-4";
        container.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <img src="${city.flag}" alt="Bandera de ${city.name}" class="flag">
                    <h5 class="card-title">${city.name}</h5>
                    <p class="time" id="time-${city.id}">--:--</p>
                </div>
            </div>
        `;
        document.getElementById("time-container").appendChild(container);
        setInterval(() => updateTime(`time-${city.id}`, city.offset), 1000);
    }, (index + 1) * 4000);
});
});
