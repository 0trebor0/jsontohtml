var app = {};
app.create = (json)=>{
    let u;
    if( typeof json == 'object' ){
        if( "name" in json ){
            u = document.createElement( json.name );
            if( json.parent && json.parent !=='' ){
                if( json.parent.nodeType && json.parent.nodeType === 1 ){
                    json.parent.appendChild( u );
                } else if( document.querySelector( json.parent ) ){
                    document.querySelector(  json.parent ).appendChild( u );
                } else {
                    u = {'type':'error','msg':'cant find '+json.parent};
                }
            } else {
                document.body.appendChild( u );
            }
            if( json.attribute && typeof json.attribute == 'object' ){
                for( a in json.attribute ){
                    u[a] = json.attribute[a];
                }
            }
            if( json.class && json.class.length > 0){
                //Loop to add class
                json.class.forEach((c)=>{
                    u.classList.add(c);
                });
            }
            if( json.onclick && typeof json.onclick == 'function'){
                //Add onclick event
                u.onclick = json.onclick;
            }
            if( json.oncreate && typeof json.oncreate == 'function' ){
                //Run function on element create
                json.oncreate(u);
            }
            if( json.body && typeof json.body == 'string' ){
                u.innerHTML += json.body;
            } else if( json.body && typeof json.body == 'object' && json.body.length > 0 ){
                json.body.forEach((b)=>{
                    if( typeof b == 'object' ){
                        b.parent = u;
                        app.create(b);
                    } else if( typeof b == 'string' ){
                        u.innerHTML += b;
                    }
                });
            }

        } else {
            u = {'type':'error','msg':'Missing Name'};
        }
    } else {
        u = {'type':'error','msg':'not valid json'};
    }
    return u;
}