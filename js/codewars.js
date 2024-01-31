// Enumerable magic
const arr = [1, 2, 3, 4, 5];
let item = 1;

function include(arr, item) {
    
    let onList = arr.includes(item);
    if (!(item === undefined || arr.length === 0)) {
        for(let i = 0; i < arr.length; i++){
          return onList;
        }   
    } else {
        return false;
    }
}
include(arr, item);

// Descending Order
const n = 1021;

function descending(n) {
    const sorter = [];
    n = n.toString();
    n = n.split("");
    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            if (n[i] < n[j]) {
                let temp = n[i];
                n[i] = n[j];
                n[j] = temp;
            }   
        }
        sorter.push(n[i]);
    }

    return Number(sorter.join(""));
}

descending(n);

// Exclamation marks series
const string = "!ken";

function remove(string) {
    string = string.split("");
    let index = string.lastIndexOf("!");
    
    for (let i = 0; i < string.length; i++) {
        if (string.includes("!") && string.length - 1 === index) {
            string.splice(index, 1);
        }
    }
    return string.join("");
}

remove(string);

// Array diff
const array1 = [1,2];
const array2 = [1];

function arrayDiff(a, b) {
    return a.filter((num) => !b.includes(num));
}
arrayDiff([8, 14, 17, 2, -3, 8, 2, 12, 8, -7, 13, 17, 2, -20, 16, 16, 0, -19, -17], [8, 14, 17, 2, -3, 8]);
arrayDiff(array1, array2)

// Hello, Name or World

function hello(name) {
    if (name === undefined || name === "") {
        return "Hello World!";
    }
    name = name.toLowerCase()
    
    return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}!`;
}

// Split Strings 
function solution(str) {
    str = str.split("");
    
    const even = str.reduce((dup, letter, index) => { 
        if (index % 2 === 0) {
            dup.push(letter);
        }
        return dup;
    }, []);
    const odd = str.reduce((dup, letter, index) => { 
        if (index % 2 !== 0) {
            dup.push(letter);
        }
        return dup;
    }, []);
    
    const split = even.map((letter, index) => {
        if (odd[index] === NaN || odd[index] === undefined) {
            return  even[index] + "_";
        }
        return even[index] + odd[index];
    });

    return split;
}

solution("isthistoolong");

//Crash Override
let firstName = {A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Data', E: 'Energy', F: 'Function', G: 'Glitch', H: 'Half-life', I: 'Ice', J: 'Java', K: 'Keystroke', L: 'Logic', M: 'Malware', N: 'Nagware', O: 'OS', P: 'Phishing', Q: 'Quantum', R: 'RAD', S: 'Strike', T: 'Trojan', U: 'Ultraviolet', V: 'Vanilla', W: 'WiFi', X: 'Xerox', Y: 'Y', Z: 'Zero'}

let surname = { A: 'Analogue', B: 'Bomb', C: 'Catalyst', D: 'Discharge', E: 'Electron', F: 'Faraday', G: 'Gig', H: 'Hacker', I: 'IP', J: 'Jabber', K: 'Killer', L: 'Lazer', M: 'Mike', N: 'n00b', O: 'Overclock', P: 'Payload', Q: 'Quark', R: 'Roy', S: 'Spy', T: 'T-Rex', U: 'Unit', V: 'Virus', W: 'Worm', X: 'X', Y: 'Yob', Z: 'Zombie' }

function aliasGen(name, lastName) {
    let nameInitial = name.charAt(0).toUpperCase(); 
    let surnameInitial = lastName.charAt(0).toUpperCase();
    let first = firstName[nameInitial];
    let last = surname[surnameInitial];
    if (/\d/.test(name.charAt(0)) || /\d/.test(lastName.charAt(0))) {
        return "Your name must start with a letter from A - Z.";  
    }
    
    return first +" "+ last;
}

// console.log(aliasGen("q1alew", "mnanzyaas"));

// Points
function points(games) {
    return games.reduce((total, game) => {
        let x = game.concat(":")[0];
        let y = game.concat(":")[2];
        if (x > y) {
            total += 3;
        } else if (x === y) {
            total += 1;
        }
        return total;
    }, 0);
}

// console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]))
// console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]))

// Maskify
function maskify(cc) {
    let censored = [];
    const lastFour = cc.split("").slice(cc.length - 4);
    
    for (let i = 0; i < cc.length; i++) {
        censored.push("#");
    }
    censored.splice(censored.length - 4, 4, ...lastFour)
    return censored.join("");
}

// console.log(maskify("11111"))

// Name that number
function nameThatNumber(num) {
    const numbers = { 0:"zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 15: "fifteen", 18: "eighteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety", };
    const x = num.toString().charAt(0);
    const y = num.toString().charAt(1);
    
    for (const key in numbers) {
        switch (true) {
            case num == key:
                return numbers[key];
            case num == 1 + key && num != 10 && num != 11 && num != 12 && num != 13 && num != 15 && num != 18:
                return numbers[key] + "teen";
            case num == 2 + key && num > 20:
                return "twenty " + numbers[key];
            case num == 3 + key && num > 30:
                return "thirty " + numbers[key];
            case num == 4 + key && num > 40:
                return "forty " + numbers[key];
            case num == 5 + key && num > 50:
                return "fifty " + numbers[key];
            case num == x + key && x + y > 60 && num <= 99 && !(x + y >= 80 && num <= 89) && num != 70 && num != 90:
                return numbers[x] + "ty " + numbers[key];
            case num == x + key && x + y > 80 && num <= 89:
                return numbers[x] + "y " + numbers[key];
            default:
                break;
        } 
    }
}

// console.log(nameThatNumber(1));

// Reverse: need to extend and turn this into object
function reverse(str) {
    str = str.split("");
    reverseString = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString.push(str[i]);
    }
    return reverseString.join("");
}


// console.log(reverse("datkilab"));
// console.log(reverse("lanimilbus"));

// Valid Braces Need two for loops to compare the start and end of an array(?)

function validBraces(braces) {
    
    for (let i = 0; i < braces.length; i++) {
        const element = array[i];
        
    }
    

}
