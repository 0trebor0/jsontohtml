const jsdom = require("jsdom");
const fs = require('fs');
const { JSDOM } = jsdom;


module.exports = ()=>{

    let defaultFile = fs.readFileSync('./default.html','utf8');

    let DOM =  new JSDOM( defaultFile, {runScripts:'dangerously',resources:'usable'} );

    let window = DOM.window;

    let onload = ( func )=>{

        let script = window.document.createElement('script');

        window.document.appendChild( script );

        console.log( func.toString() );

    }

    let render = ()=>{ 
        let d = DOM.serialize();
        return d;
    }

    return { window, render, onload}
}
