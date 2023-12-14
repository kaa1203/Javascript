const buttons = document.getElementsByClassName("calculator-button");
const screen = document.getElementById("calcScreen");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        // screen.value = " ";
        screen.value += buttons[i].value;
    });
    
}

equals.addEventListener('click', function () {
    screen.value;
    if (screen.value.includes('+')) {
        screen.value = Number(screen.value.split('+')[0]) + Number(screen.value.split('+')[1]);
    } else if (screen.value.includes('-')) {
        screen.value = Number(screen.value.split('-')[0]) - Number(screen.value.split('-')[1]);
    } else if (screen.value.includes('x')) {
        screen.value = Number(screen.value.split('x')[0]) * Number(screen.value.split('x')[1]);
    } else {
        screen.value = Number(screen.value.split('/')[0]) / Number(screen.value.split('/')[1]);
    }
    // Negative numbers and parenthesis causes the value to be a NaN
    console.log(screen.value);
});


clear.addEventListener('click', function () {
    screen.value = clear.value; 
});

const firstVal = document.getElementById('firstVal');
const secondVal = document.getElementById('secondVal');
const simOp = document.getElementById('simOp');
const simEq = document.getElementById('simEq');
const simRes = document.getElementById('simRes');

simEq.addEventListener('click', function () {
    for (let i = 0; i < 1; i++) {
        if (simOp.value == '+') {
            simRes.value = ' ';
            simRes.value += Number(firstVal.value) + Number(secondVal.value);    
        } else if (simOp.value == '-') {
            simRes.value = ' ';
            simRes.value += Number(firstVal.value) - Number(secondVal.value);
        } else if (simOp.value == '*') {
            simRes.value = ' ';
            simRes.value += Number(firstVal.value) * Number(secondVal.value);
        } else {
            simRes.value = ' ';
            simRes.value += Number(firstVal.value) / Number(secondVal.value);
        } 
    
    }
});

// formula for rps

// let a = Math.random()*(3-1);
// let b = Math.round(a);
// console.log(b);