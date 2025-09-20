// counter.js
let count = 0;

export function increment() {
    count++;
    updateDisplay();
}

export function decrement() {
    count--;
    updateDisplay();
}

export function reset() {
    count = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("counter").innerText = count;
}