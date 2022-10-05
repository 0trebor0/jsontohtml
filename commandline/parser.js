const fs = require('fs');
const json = ( object = null )=>{
    try{
        if( typeof object == 'object' ){
            if( object.name && object.name !== '' ){
                let attributes = "";
                if( object.class && object.class !== '' ){
                    attributes += " class='"+object.class+"'";
                }
                if( object.attributes && object.attributes !== '' ){
                    for( t in object.attributes ){
                        attributes += " "+t+"='"+object.attributes[t]+"'";
                    }
                }
                if( object.oncreate && typeof object.oncreate == 'function' ){
                    
                }
                let h = "<"+object.name+attributes+">";
                if( object.body && typeof object.body == 'object' && object.body.length > 0 ){
                    object.body.forEach((child)=>{
                        h += json( child );
                    });
                } else if( object.body && object.body !== '' ){
                    h += object.body;
                }
                h += "</"+object.name+">";
                return h;
            }
        }
    }catch( err ){
        console.log( err );
    }
}
const html = ( object = null )=>{}

module.exports = {json};