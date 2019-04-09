// document.getElementById()

console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);

// Get things from the element

let taskTitle = document.getElementById('task-title');
console.log(taskTitle);

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '10px';
// taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';


// document.querySelector()
// console.log(document.querySelector('#task-form div'));
// console.log(document.querySelector('#task-form div').className);

document.querySelector('li')

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


let oddlist = document.querySelectorAll('li:nth-child(odd)');
oddlist.forEach(function(list){
   list.style.background  = '#ccc';
});
