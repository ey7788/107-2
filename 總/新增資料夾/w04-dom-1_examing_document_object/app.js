let items = document.getElementsByClassName('collection-item');
console.log(items);

console.log(items[0]);

items[0].style.color ='red';
items[0].textContent = 'Hello';
items[0].innerHTML ='<h3>Hello</h3>';

items = document.querySelector('ul').getElementsByClassName('collection-item');

let lis = document.getElementsByTagName('li');

console.log(lis[0]);

//convert HTML collection into array

//let lsi2 = Array.from(lis);

//lsi2.reverse();

//lsi2.forEach(function)(li,index){
//    console.log(li.ClassName);
 //   li.textContent = `${index}:Hello`;
//});

//document.querySelectorALL
item = document.querySelectorAll('ul.collection li.collection-item');

item.forEach(function)(li,index){
    li.textContent = `${index}:Hello`;
});

const lisOdd = document.querySelectorAll('li:nth-child(odd');

lisOdd.forEach(function(li){
    li.style.background = '#ccc';
})
const lisEven = document.querySelectorAll('li:nth-child(even');
for(let i=0; i<lisEven.length;i++){
    lisEven[i].style.background ='#ffff00'
}

