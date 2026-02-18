const buttons = document.querySelectorAll(".buttons button")
const body = document.body
buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        if (e.target.id === "gray") {
            body.style.backgroundColor =e.target.id
        }
    })
})