const hidePrivates = () => document.querySelectorAll(".tumbpu").forEach(tumbpu => {
    if (tumbpu.querySelector(".icon-private")) {
        tumbpu.style.display = "none";
    }
});

const showPrivates = () => document.querySelectorAll(".tumbpu").forEach(tumbpu => {
    if (tumbpu.querySelector(".icon-private")) {
        tumbpu.style.display = "block";
    }
});
