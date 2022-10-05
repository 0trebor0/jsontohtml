const cheerio = require('cheerio');
// const fs = require('fs');
// const parser = require('./lib/parser.js');


// let test = parser.json({'name':'html','body':[
//     {'name':'head',body:[
//         {name:'title',body:'IM TEST'},
//         {name:'meta','attributes':{'charset':'UTF-8'}},
//         {name:'meta','attributes':{'name':'viewport','content':'width=device-width, initial-scale=1.0'}},
//         {name:'link','attributes':{'rel':'shortcut icon','type':'image/png','href':'https://avatars1.githubusercontent.com/u/9081310?s=460&v=4'}},
//         {name:'link','attributes':{'rel':'stylesheet','href':'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.css'}}
//     ]},
//     {'name':'body',attributes:{'style':'text-align:center;'},'body':[
//         {name:'script'},
//         {name:'h1',body:'HEY',class:'IMTEST YOUARETOO',attributes:{'style':'color:red;','id':'IMTITLE','onclick':'hey()'}},
//         {name:'button',oncreate:(e)=>{}}
//     ]}
// ]});
// console.log( test );
// //fs.writeFileSync( './test.html', test );

class Test{
    constructor(){
        this.text = "Hello";
    }
    render(){
        return(
            <div>{this.text}</div>
        );
    }
}