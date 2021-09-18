const btn = document.querySelector(".btn");
btn.addEventListener("click",() => {
    if(!btn.classList.contains("left")) {
        btn.classList.add("left");
        document.body.classList.toggle("dark")
    } else {
        btn.classList.remove("left");
        document.body.classList.remove("dark");
    }
});

