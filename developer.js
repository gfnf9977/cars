function showDeveloperInfo(lastName, firstName, position = "Admin") {
    const info = `Розробник сторінки:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`;
    alert(info);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("developer-info").addEventListener("click", function() {
        showDeveloperInfo("Kozyr", "Yaroslav");
    });
});
