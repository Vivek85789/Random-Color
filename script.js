function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.style.backgroundColor = getRandomColor();
    });
});