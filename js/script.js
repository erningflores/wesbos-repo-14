let age = 100;
let age2 = age;
console.log(`age = ${age} and age2 = ${age2}`);
age = 200;
console.log(`age = ${age} and age2 = ${age2}`);

let name1 = "wes";
let name2 = name1;
console.log(`name1 = ${name1} and name2 = ${name2}`);
name1 = "wesley";
console.log(`name1 = ${name1} and name2 = ${name2}`);

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

//this change the original array. This is an array reference not an array copy
//const team = players;
//console.log(`team: ${team} and players: ${players}`);


//one way to not affect the original array is to use splice function
const team2 = players.splice();
console.log(`team2: ${team2} and players: ${players}`);

team2[3] = "Lux";
console.log(`team2: ${team2} and players: ${players}`);

//second way
const team3 = [].concat(players);
console.log(`team3: ${team3} and players: ${players}`);

team3[3] = "Bonus";
console.log(`team3: ${team3} and players: ${players}`);

//third way
const team4 = [...players];
console.log(`team4: ${team4} and players: ${players}`);

team4[3] = "yee-haw";
console.log(`team4: ${team4} and players: ${players}`);

//fourth way
const team5 = Array.from(players);
console.log(`team5: ${team5} and players: ${players}`);

team5[3] = "pencil";
console.log(`team5: ${team5} and players: ${players}`);

const person = {
    name: 'Wes Bos',
    age: 80
};

//object refence and not an object copy
/*
const captain = person;

captain.age = 35;
Object.values(captain).forEach(element => {
    console.log(`${element} `);
});
Object.values(person).forEach(element => {
    console.log(`${element} `);
});
*/

//use Object.assign to create a copy
const captain2 = Object.assign({}, person);
captain2.age = 99;
Object.values(captain2).forEach(element => {
    console.log(`${element} `);
});
Object.values(person).forEach(element => {
    console.log(`${element} `);
});

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
};
console.clear();
//console.log(wes);

//first way to copy but a shallow copy. twitter did not change.
/*
const dev = Object.assign({}, wes);
dev.age = 20;
dev.social.twitter = "@wessy"

Object.values(dev).forEach(element => {
    if(typeof element === "object"){
        console.log(element);
    }
    console.log(`${element} `);
});
Object.values(wes).forEach(element => {
    if(typeof element === "object"){
        console.log(element);
    }
    console.log(`${element} `);
});

//second way

const dev2 = {...wes};
dev2.age = 39;
dev2.social.twitter = "@wessyTwitter"

Object.values(dev2).forEach(element => {
    if(typeof element === "object"){
        console.log(element);
    }
    console.log(`${element} `);
});
Object.values(wes).forEach(element => {
    if(typeof element === "object"){
        console.log(element);
    }
    console.log(`${element} `);
});
*/

//this is way better
const dev3 = JSON.parse(JSON.stringify(wes));
dev3.age = 47;
dev3.social.twitter = "@wowMali";
Object.values(dev3).forEach(element => {
    if(typeof element === "object"){
        console.log(element);
    }
    console.log(`${element} `);
});
Object.values(wes).forEach(element => {
    if(typeof element === "object"){
        console.log(element);
    }
    console.log(`${element} `);
});

//this is much better. Only the function it cannot copy
const originalObject = {
    a: 1,
    b: { c: 2 },
    d: new Date(),
    e: [1, 2, { f: 3 }],
};
const deepCopy = structuredClone(originalObject);
deepCopy.b.c = 20;
deepCopy.e[2].f = 30;
console.log(originalObject);
console.log(deepCopy);






