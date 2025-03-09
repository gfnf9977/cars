function compareStrings() {
    let string1 = prompt("Введіть перший рядок:");
    let string2 = prompt("Введіть другий рядок:");

    if (string1.length > string2.length) {
        alert("Більший рядок: " + string1);
    } else if (string2.length > string1.length) {
        alert("Більший рядок: " + string2);
    } else {
        alert("Обидва рядки однакової довжини.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("compare-strings-btn").addEventListener("click", compareStrings);
});
