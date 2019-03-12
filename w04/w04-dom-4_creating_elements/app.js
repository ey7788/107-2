// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));
// Get the old heading
const oldHeading = document.getElementById('task-title');
console.log("oldHeading",oldHeading);
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
console.log(lis);
const list = document.querySelector('ul');
console.log(list);
// Remove list item

// Remove child element

// CLASSES & ATTR

let val;

// Classes

// Attributes

console.log(val);