let screen = document.getElementById("screen");

function press(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = "Error";
    }
}
