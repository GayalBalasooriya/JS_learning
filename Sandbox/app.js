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


