// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { name: newPotName } = newPotion;
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === newPotName) {
//         return `Error! Potion ${newPotName} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let potionIndex = -1;
//     for (let i = 0; i < this.potions.length; i++) {
//       const potion = Object.values(this.potions);
//       if (potion[i].name === potionName) {
//         potionIndex = i;
//         this.potions.splice(potionIndex, 1);
//       }
//     }
    
//     if (potionIndex === -1) {
//      return `Potion ${potionName} is not in inventory!`;
//     }
//   },
//   updatePotionName(oldName, newName) {
//     let potionIndex = -1;
//     for (let i = 0; i < this.potions.length; i++) {
//       const potion = Object.values(this.potions);
//       if (potion[i].name === oldName) {
//         potionIndex = i;
//         potion[i].name = newName;
//       }
//     }
    
//     if (potionIndex === -1) {
//      return `Potion ${potionName} is not in inventory!`;
//     }
//   },
//   // Change code above this line
// };

// // console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.updatePotionName('Speed potion', 'Polymorth'));
// // console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
// console.log(atTheOldToad.getPotions());

// Module 4: 4
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {

//     const pizzaIndex = this.pizzas.indexOf(pizzaName);
//       if (pizzaIndex === -1) {
//        return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//       }
//       return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// Module 4: 20

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter((genre, index) => allGenres.indexOf(genre) === index);

// console.log(allGenres);
// console.log(uniqueGenres);

// Module 4: 35

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => total += player.playtime / player.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame)

// Module 4: 47

// const getSortedFriends = users => {
//     const friends = [...users]
//         .flatMap((user) => user.friends)
//         .sort();
//     const uniqueFriends = [...friends].filter((friend, index) => friends.indexOf(friend) === index);
//     return uniqueFriends;
// };

// Module 4: 48
// const getTotalBalanceByGender = (users, gender) => {
//     return [...users]
//         .filter((user) => user.gender === gender)
//         .reduce((total, user) => total + user.balance, 0);
// };

// console.log(getTotalBalanceByGender([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ], "male"));

// Module 5: 20
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  
  blacklistedEmails = [];

  constructor({ email, accessLevel}) {
    super(email);
    this.accessLevel = accessLevel;
  }
  

  isBlacklisted (email) {
    return this.blacklistedEmails.includes(email);
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
