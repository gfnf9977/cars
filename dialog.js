function dialogWithUser() {
    let favoriteCar = prompt("Яка ваша улюблена марка автомобіля?");
    if (favoriteCar) {
        alert("Чудово! " + favoriteCar + " — відмінний вибір.");
        let numberOfCars = prompt("Скільки автомобілів цієї марки ви бачили сьогодні?");
        numberOfCars = parseInt(numberOfCars, 10);

        if (!isNaN(numberOfCars)) {
            let message = "Ви бачили " + numberOfCars + " автомобілів марки " + favoriteCar + " сьогодні.";
            if (numberOfCars > 5) {
                message += " Це дуже багато!";
            } else if (numberOfCars < 1) {
                message += " Можливо, ви не звертали уваги.";
            } else {
                message += " Це цікаво!";
            }
            alert(message);
        } else {
            alert("Будь ласка, введіть число.");
        }
    } else {
        alert("Шкода, що ви не вказали улюблену марку автомобіля.");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("survey-button").addEventListener("click", function() {
        dialogWithUser();
    });
});
