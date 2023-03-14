export var search = (id)=>{
    return document.querySelectorAll( id );
}
export var read = ( e )=>{
    var element = {};
    element.type = e.tagName;
    element.content = [];
    element.attributes = {};
    if( e.childElementCount === 0 ){
        element.content = e.innerText
    } else {
        for( let i =0; i< e.children.length;i++){
            element.content.push( read(e.children[i]) );
        }
    }
    for( let i =0; i< e.attributes.length;i++){
        let atr = e.attributes[i];
        element.attributes[atr.name] = atr.value;
    }
    return element;
}
export var create = (json)=>{
    let u;
    if( typeof json == 'object' ){
        if( "type" in json ){
            u = document.createElement( json.type );
            if( json.parent && json.parent !=='' ){
                if( json.parent.nodeType && json.parent.nodeType === 1 ){
                    json.parent.appendChild( u );
                } else if( document.querySelector( json.parent ) ){
                    document.querySelector(  json.parent ).appendChild( u );
                } else {
                    u = {};
                }
            } else {
                document.body.appendChild( u );
            }
            if( json.attributes && typeof json.attributes == 'object' ){
                json.attributes.forEach(t=>{
                    if( 'type' in t && 'content' in t ){
                        if( t.type == 'class' ){
                            u.classList.add(t.content);
                        } else {
                            u[t.type] = t.content;
                        }
                    }
                });
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
            if( json.content && typeof json.content == 'string' ){
                u.innerHTML += json.content;
            } else if( json.content && typeof json.content == 'object' && json.content.length > 0 ){
                json.content.forEach((b)=>{
                    if( typeof b == 'object' ){
                        b.parent = u;
                        create(b);
                    } else if( typeof b == 'string' ){
                        u.innerHTML += b;
                    }
                });
            }

        } else {
            u = {'type':'error','msg':'Missing Element Type'};
        }
    } else {
        u = {};
    }
    return u;
}
