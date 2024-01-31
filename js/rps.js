const skill = document.getElementsByClassName('skill');
const stageHeading = document.getElementsByClassName('stage');
const rpsStat = document.getElementsByClassName('rps-status');
const playerHp = document.getElementById('playerHp');
const npcHp = document.getElementById('npcHp');

// r - 0 , p - 1 , s - 2
let userLose = false,
    stage = 5;

for (let i = 0; i < skill.length; i++) {
    skill[i].addEventListener('click', function () {
        let npcMove = Math.round(Math.random() * (3 - 1));
        if (Number(skill[i].value) === npcMove) {
            console.log('tie');
        } else if (Number(skill[i].value) === 0 && npcMove === 1 || Number(skill[i].value) === 1 && npcMove === 2 || Number(skill[i].value) === 2 && npcMove === 0) {
            // console.log('Npc Win!');
            playerHp.value -= 20;
        } else {
            // console.log('You Win!');
            npcHp.value -= 20;
        }
    });
    
}
