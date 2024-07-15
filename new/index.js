const fs = require('fs');
let dom = require('./dom.js');



dom = dom();

let document = dom.document;
let window = dom.window;

// console.log( document );


let div = window.create('div',dom.document.body);
let h1 = window.create('h1',div);

dom.onload(()=>{
    alert('hey');
    document.querySelector('body');
});
fs.writeFileSync('./example.html',dom.render());

