const fs = require('fs');
const app = {};
app.html = ( json = null )=>{
    try{
        if( typeof json == 'object' ){
            if( json.name && json.name !== '' ){
                let attributes = "";
                if( json.class && json.class !== '' ){
                    attributes += " class='"+json.class+"'";
                }
                if( json.attributes && json.attributes !== '' ){
                    for( t in json.attributes ){
                        attributes += " "+t+"='"+json.attributes[t]+"'";
                    }
                }
                let html = "<"+json.name+attributes+">";
                if( json.body && typeof json.body == 'object' && json.body.length > 0 ){
                    json.body.forEach((child)=>{
                        html += app.html( child );
                    });
                } else if( json.body && json.body !== '' ){
                    html += json.body;
                }
                html += "</"+json.name+">";
                return html;
            }
        }
    }catch( err ){
        console.log( err );
    }
};


let test = app.html({'name':'html','body':[
    {'name':'head',body:[
        {name:'title',body:'IM TEST'},
        {name:'meta','attributes':{'charset':'UTF-8'}},
        {name:'meta','attributes':{'name':'viewport','content':'width=device-width, initial-scale=1.0'}},
        {name:'link','attributes':{'rel':'shortcut icon','type':'image/png','href':'https://avatars1.githubusercontent.com/u/9081310?s=460&v=4'}},
        {name:'link','attributes':{'rel':'stylesheet','href':'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.css'}}
    ]},
    {'name':'body',attributes:{'style':'text-align:center;'},'body':[
        {name:'script'},
        {name:'h1',body:'HEY',class:'IMTEST YOUARETOO',attributes:{'style':'color:red;','id':'IMTITLE','onclick':'hey()'}}
    ]}
]});
console.log( test );
//fs.writeFileSync( './test.html', test );