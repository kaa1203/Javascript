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
    screen.value = "show answer...";
});

const firstVal = document.getElementById('firstVal');
const secondVal = document.getElementById('secondVal');
const simOp = document.getElementById('simOp');
const simEq = document.getElementById('simEq');
const simRes = document.getElementById('simRes');

simEq.addEventListener('click', function () {
    Number(firstVal.value);
    Number(secondVal.value);
    for (let i = 0; i < 1; i++) {
        simRes.value += Number(firstVal.value) + simOp.value[i] + Number(secondVal.value);
        
        // console.log(typeof firstVal.value)
    }
    console.log(typeof firstVal.value);
});