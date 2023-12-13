const buttons = document.getElementsByClassName("calculator-button");
const screen = document.getElementById("calcScreen");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        screen.value += buttons[i].value;
    });
}

clear.addEventListener('click', function () {
    screen.value = clear.value; 
});

equals.addEventListener('click', function () {
    screen.value = "show answer..."
});
