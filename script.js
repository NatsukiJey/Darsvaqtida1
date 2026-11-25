const box = document.querySelector(".box");
const startButton = document.querySelector(".start-button");
const status = document.querySelector(".status");
const points = ["at-2", "at-3", "at-4", ""];
const pointNames = ["2", "3", "4", "1"];
const stepDuration = 1200;

startButton.addEventListener("click", async () => {
    startButton.disabled = true;
    status.textContent = "Kvadrat harakatlanmoqda...";

    for (let index = 0; index < points.length; index += 1) {
        box.className = `box ${points[index]}`.trim();
        await new Promise((resolve) => setTimeout(resolve, stepDuration));
        if (index < points.length - 1) {
            status.textContent = `Kvadrat ${pointNames[index]}-nuqtada.`;
        }
    }

    status.textContent = "Kvadrat 1-nuqtaga qaytdi.";
    startButton.disabled = false;
});