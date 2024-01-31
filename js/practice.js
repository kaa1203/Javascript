// const processCall = (user) => {
//     let isUserAvailable = Math.random() > 0.5;

//     if (!isUserAvailable) {
//         console.log(`User ${user} is not available, leave a message`);
//     } else {
//         console.log(`Connecting you to user ${user}, please wait...`);
//     }
// }

// processCall("Kenneth");

// const processCall = (user, isAvailabe, isNotAvailable) => {
//     let isUserAvailable = Math.random() > 0.5;

//     if (!isUserAvailable) {
//         isNotAvailable(user);
//         return;
//     }
//     isAvailabe(user);
// }

// const takeCall = (user) => console.log(`Connecting you to user ${user}, please wait...`);
// const ansMachine = (user) => console.log(`User ${user} is not available, leave a message`);
// const leaveMessage = (user) => console.log(`The subscriber ${user} is not available, recording a hologram.`);

// processCall("Kenneth", takeCall, ansMachine);
// processCall("Aeolus", takeCall, ansMachine);
// processCall("Agl", takeCall, leaveMessage);

// const repeatLog = (num) => {
//     for (let i = 1; i <= num; i++) {
//         console.log(i);
//     }
// }

// const repeatLog = (num, print) => {
//     for (let i = 1; i <= num; i++) {
//         print(i);
//     }
// }

// repeatLog(5, printOne = (num) => console.log(num));
// repeatLog(5, printTwo = (num) => console.log(`Number: ${num}`));

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num, i, array) => console.log(`Value: ${num}, Index: ${i}, Array: [${array}]`));

// const converter = {
//         codes: [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        
//         letterToNumber(message) {
//                 return message
//                         .toLowerCase()
//                         .split("")
//                         .filter((letter) => this.codes.indexOf(letter) !== -1)
//                         .map((letter) => this.codes.indexOf(letter))
//                         .join(" ");
                
//         },

//         numberToLetter(message) {
//                 return message.split(" ").map((num) => this.codes[num]).join("").toUpperCase();
//         },
    
// }


// console.log(converter.letterToNumber("Never gonna give you up, never gonna let you down, never gonna run around and hurt you"));
// console.log(converter.numberToLetter("14 5 22 5 18 0 7 15 14 14 1 0 7 9 22 5 0 25 15 21 0 21 16 0 14 5 22 5 18 0 7 15 14 14 1 0 12 5 20 0 25 15 21 0 4 15 23 14 0 14 5 22 5 18 0 7 15 14 14 1 0 18 21 14 0 1 18 15 21 14 4 0 1 14 4 0 8 21 18 20 0 25 15 21"));
// console.log(converter.letterToNumber("WABBALABADUBDUB!@!!23123123123"))
// console.log(converter.numberToLetter("23 1 2 2 1 12 1 2 1 4 21 2 4 21 2"));

// const player = {
//         username: "user123",
//         level: 32,
//         class: "Warrior",
//         skill: ["Cleave", "Thousand Strength", "Two Handed Sword Mastery", "Slash"],
//         getStats() {
//                 return `${this.username}, ${this.level}, ${this.class}, ${this.skill}`;
//         },
// }

// function response(callback) {
//         return console.log(`Player has stats of: ${callback()}`);
// }

// response(player.getStats.bind(player))
// player.getStats();

// class Blogger {
//     constructor(uname, age, post, topics) {
//         this.uname = uname;
//         this.age = age;
//         this.post = post;
//         this.topics = topics;
//     }
    
//     getInfo() {
//         return `User ${this.uname} is ${this.age} years old, has ${this.post} posts, with a  of ${this.topics}`;
//     }

//     addTopic(topic) {
//         this.topics.push(topic);
//     }
// }

// let kenneth = new Blogger("kaa123@email.com", 26, 300, ["Gaming", "Slacking"]);
// console.log(kenneth.addTopic("Sleeping"));
// console.log(kenneth.addTopic("Reading"));
// console.log(kenneth);

/* 
Example 4 - Notes

Write a Notes class that manages the collection of notes in the items property. 

A note is an object with text and priority properties. 


Add a static property Priority to the class, which will store the object with priorities.
    {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
    }

methods

addNote(note) - receives a new note and adds it to the end of the current ones.

removeNote(text) - receives the Note and, if it exists, removes it from the current.

updatePriority(text, newPriority) - receives the Note and, if it exists set to newPriority
*/

class Notes {
    static Priority = {
        LOW: "low",
        HIGH: "high",
        NORMAL: "normal",
    };

    constructor(array) {
        this.items = array;
    }

    getNote() { 
        return console.log(this.items);
    }

    addNote(note) {
        //WRITE YOUR CODE HERE
        this.items.push(note);
    }

    removeNote(text) {
        //WRITE YOUR CODE HERE
        let noteExist = this.items.find((item) => item.text === text);
        let index = this.items.findIndex((item) => item.text === text);

        if (!noteExist) {
            return console.log(`${text} doesn't exist bruh!`);
        }

        this.items.splice(index, 1);
    }

    updatePriority(text, newPriority) {
        //WRITE YOUR CODE HERE
        let noteExist = false;
        this.items.find((item) => {
            if (item.text === text) {
                item.priority = newPriority;
                noteExist = true;
                return console.log(this.items);
            }
        });
        if (noteExist === false) {
            return console.log(`Note doesn't exist`);
        }
    }
}

let myNotes = new Notes([]);
myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
myNotes.addNote({ text: "My second note", priority: Notes.Priority.NORMAL });
myNotes.addNote({ text: "My third note"});
myNotes.removeNote("My second note");
myNotes.updatePriority("My third note", Notes.Priority.HIGH);
// myNotes.getNote();