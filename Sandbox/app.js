//alert('hello')
// let val = Math.min(8,3);
// console.log(val);
 
// var id = 100;

// if(id == 'undefined') {
//     console.log("Id is undefined");
// }
// else {
//     console.log("Id is defined");
// }

// (function(name) {
//     console.log(`Hello i'm ${name}`);
// })('Gayal')

/*const arr = [ undefined, 'hi', null, 50, -1, -5, 2, 'yo'];

const arr2 = arr.filter((val) => {
    return typeof val == 'number';
});
console.log(arr2);
if(arr2.length == 0) {
    console.log("No numbers in array");
} else {
    arr2.sort(function(x,y) {
        return x-y;
    });
    console.log(arr2[0]);
} */

//localStorage.setItem('name', 'jhon');

/*
const posts = [
    {title: 'post one', body: 'this is post one'}, 
    {title: 'post two', body: 'this is post two'}
];

function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 3000);
}

function getPost() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `
                <li>${post.title}</li>
            `;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({
    title: 'post three', body: 'this is post three'
}, getPost);

getPost(); // Get the post before actually created.
*/

const http = new EasyHttp;

/*
//Get users
http.get('http://jsonplaceholder.typicode.com/users')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
*/

// user data
const data = {
    name: 'Jhone Doe',
    username: 'jhonedoe',
    email: 'jhonedoe@gmail.com'
}


/*  
// create post
http.post('http://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
*/


/*
// update post
http.put('http://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
*/


/*
// delete post
http.delete('http://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));
*/

/*
class Stack{
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.items.length == 0)
            return "underflow"
        return this.items.pop();
    }

    display() {
        if(this.items.length == 0) {
            return "no items in array"
        }
        return this.items.forEach((ele) => {
            console.log(" "+ ele);
        })
    }
}

let stack = new Stack();
stack.push(10);
stack.push(30)
stack.display();
*/

// var strArray = [ "q", "w", "w", "e", "i", "u", "r"];

// console.log(strArray.sort());

// for(i=0; i<strArray.length-1; i++) {
//     if(strArray[i] == strArray[i+1]) {
//         console.log("Duplicate " + strArray[i]);
//         i += 1;
//     }
// }

//let arr = [5, "hi", 1, 46, 32, 12, "asfda", undefined, null, -2, -9];

// let newArray = arr.filter((ele) => {
//     return typeof ele == 'number'
// });

// console.log(newArray);

// if(newArray.length == 0) {
//     console.log("No numbers in array");
// }
// else {
//     let newest = newArray.sort((x,y) => {
//         return x-y; 
//     })
//     console.log(newArray);
// }
/*
var a = arr[3].toString();
//arr.join('');
let c = 12345;
let b = c.toString();
console.log(b)
console.log(typeof b)
let arrr = b.split('') 
console.log(arrr)
arrr.reverse()
console.log(arrr)
let arrrr = arrr.join('')
console.log(arrrr)
*/

/*
//Iterator example
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ?
            { value: names[nextIndex++], done: false } : { done: true }
        }
    }
}

// Create an array of names
const namesArr = ['jack', 'jill', 'john'];

// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

*/
/*
let text = "Hello my name is khan";

let v = text.split(' ');
console.log(v);

let z = v.sort((x, y) => {
    return x-y;
})

let j = v.sort();
let k = v.reverse();
let b = k.join(' ');
console.log(b);
*/
/*
let re = /hello/;

const result = re.exec("hello mr. fucker");

console.log(result);

let v = 1892;

p = v.toString();
q = p.split('');
r = q.reverse();
s = r.join('');
t = parseInt(s);
console.log(t);

// Queue class 
class Queue 
{ 
	// Array is used to implement a Queue 
	constructor() 
	{ 
		this.items = []; 
	} 
				
	// enqueue function 
    enqueue(element) 
    {	 
        // adding element to the queue 
        this.items.push(element); 
    }
    
    dequeue() 
    { 
        // removing element from the queue 
        // returns underflow when called  
        // on empty queue 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    } 
    
    

} 
let queue = new Queue;
queue.enqueue(100);
queue.dequeue();
queue.dequeue();
*/

// function connect() {
//     return function() {
//         return "Hi there";
//     }
// }

// console.log(connect()())

colors = ["red", "blue"];

console.log([...colors, "yellow"]);