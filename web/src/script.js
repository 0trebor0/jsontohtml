export var search = (id)=>{
    return document.querySelectorAll( id );
}
export var read = ( e )=>{
    var element = {};
    element.type = e.tagName;
    element.content = [];
    element.attributes = [];
    if( e.childElementCount === 0 ){
        element.content = e.innerText
    } else {
        for( let i =0; i< e.children.length;i++){
            element.content.push( read(e.children[i]) );
        }
    }
    for( let i =0; i< e.attributes.length;i++){
        let atr = e.attributes[i];
        element.attributes.push({type:atr.name,content:atr.value});
    }
    return element;
}
/**
 * Create HTML From Json Object
 * @constructor
 * @param {string} json - {type,attributes,content,onclick,parent,oncreate}.
 */
export var jsontohtml = (json)=>{

    let u;

    if( typeof json == 'object' ){

        if( "type" in json ){

            u = create(json.type,json.parent);

            if( json.attributes && typeof json.attributes == 'object' ){

                json.attributes.forEach(t=>{

                    u.attribute.add(t.type,t.content);

                });

            }
            if( json.class && json.class.length > 0){

                //Loop to add class

                json.class.forEach((c)=>{

                    u.class.add(c);

                });

            }

            if( json.onclick && typeof json.onclick == 'function'){

                //Add onclick event
                
                u.html.onclick = json.onclick;
            
            }

            if( json.oncreate && typeof json.oncreate == 'function' ){

                //Run function on element create

                json.oncreate(u);

            }

            if( json.content && typeof json.content == 'string' ){

                u.html.innerHTML += json.content;

            } else if( json.content && typeof json.content == 'object' && json.content.length > 0 ){

                json.content.forEach((b)=>{

                    if( typeof b == 'object' ){

                        b.parent = u.html;

                        u.children.push( jsontohtml(b,u.html) );

                    } else if( typeof b == 'string' ){

                        u.html.innerHTML += b;

                    }

                });

            }

        }

    }

    return u;

}
/**
 * Create HTML
 * @constructor
 * @param {string} name - the name of the object.
 * @param {string} parent - the dom parent.
 * @param {string} callback - the callback function.
 */
export var create = ( name,parent=null,callback=null )=>{
    let e = {};
    e.children = [];
    // e.write = (d)=>{
    //     e.html.innerHTML += d;
    // }

    e.attribute = {};

    e.attribute.add = (name,value)=>{

        return e.html.setAttribute(name, value);

    }

    e.attribute.remove = (name)=>{

        return e.html.removeAttribute(name);

    }

    e.attribute.get = (name)=>{

        return e.html.getAttribute(name);

    }

    e.attribute.has = (name)=>{

        return e.html.hasAttribute(name);

    }

    e.class = {};

    e.class.add = (value)=>{

        return e.html.classList.add(value);

    }

    e.class.remove = (value)=>{

        return e.html.classList.remove(value);

    }

    e.class.contains = (value)=>{

        return e.html.classList.contains(value);

    }

    e.html = document.createElement( name );

    if( parent == null ){

        document.body.lastChild.appendChild( e.html );

    }else if( 'html' in parent ){

        parent.html.appendChild( e.html );

    } else if( 'nodeType' in parent && parent.nodeType === 1 ){

        parent.appendChild( e.html );

    } else if( document.querySelector( parent ) ){

        document.querySelector( parent ).appendChild( e.html );

    }

    if( typeof callback == 'function' ){

        callback(e);

    }

    return e;

}
