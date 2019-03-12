// FUNCTION DECLARATIONS

function greet(firstName='John',lastName='Doe'){
    return 'Hello' + firstName +' '+lastName;
}

console.log(greet(''));
console.log(greet('Dave','smith'));

// FUNCTION EXPRESIONS

const square = function(X=3){
    return X*X;
}
console.log(square(5));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function a(){
    console.log('IIFE Ran.');
})();

(function greet(firstName='John',lastName='Doe'){
    console.log( 'Hello' + firstName +' '+lastName);
})('Dave','Smith');

// PROPERTY METHODS

const todo = {
    add: function () {
    console.log('ADD todo...');    
    },
    edit: function (id) {
    console.log(`Delete todo ${id}`);    
    }
}

todo.delete = function(id){
    console.log(`Delete todo id ${id}`);
}

todo.add();
todo.edit(111);
todo.delete(11)