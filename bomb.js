let timer = document.getElementById("timer");
let inputElement = document.getElementById("defuser")

let counter = 10;
let intervalId = setInterval(function() {
    counter = counter - 1;
    timer.textContent = counter;
    if (counter === 0) {
        timer.textContent = "BOOM!!";
        clearInterval(intervalId);
    }
}, 1000);

inputElement.addEventListener("keydown", function(event) {
    let inputElementValue = inputElement.value;
    if (inputElementValue === "defuse" && event.key === "Enter" && counter !== 0) {
        timer.textContent = "You did it!!!";
        clearInterval(intervalId)
    }
})