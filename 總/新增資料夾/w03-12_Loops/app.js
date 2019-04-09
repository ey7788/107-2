// FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log("Number " + i);
}

// WHILE LOOP
let i = 1;
while (i <= 5) {
    console.log("Number " + i);
    i++;
}

// DO WHILE
let j = 1;
do {
    console.log("Number " + j);
    j++;
} while (j <= 5);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Honda', 'Toyota', 'Chevy'];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// FOREACH
cars.forEach(function (car, index, array) {
    console.log(`${index}: ${car}`);
    console.log(array);
});

// MAP

const users = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Sara'
    },
    {
        id: 3,
        name: 'Steve'
    }
];

const ids = users.map(function(user){
    return user.id;
});
console.log(ids);

// FOR IN LOOP

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
  console.log(`${x}: ${user[x]}`);
}