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
export var jsontohtml( object ){
    if( typeof object !== 'object' ){
        throw new Error('Parameter Not valid JSON Object');
        return;
    }
    if( !("type" in object) ){
        throw new Error('Must Specify Element Type ');
        return;
    }
    if( !("parent" in object) ){
        throw new Error('Must Specify The Parent Element ');
        return;
    }
    let element = this.create( object.type, object.parent );
    if( object.attributes && typeof object.attributes == 'object' ){
        object.attributes.forEach(attr => element.setAttribute(attr.type, attr.content));
    }
    if( object.class && Array.isArray( object.class) ){
        object.class.forEach(cls => element.addClass(cls));
    }
    if( object.onclick && typeof object.onclick == 'function' ){
        element.on( 'click', object.onclick );
    }
    if( ("oncreate" in object && typeof object.oncreate == 'function') ){
        object.oncreate(element);
    }
    if( object.content ){
        if(typeof object.content == 'string' ){
            element.setText(object.content);
        } else if(Array.isArray(object.content)) {
            object.content.forEach( item=>{
                if( typeof item == 'object' ){
                    item.parent = element;
                    jsontohtml( item );
                } else if( typeof item == 'string' ){
                    element.setText( item );
                }
            } );
        }
    }
    return element;
}
/**
 * Create HTML
 * @constructor
 * @param {string} name - the name of the object.
 * @param {string} parent - the dom parent.
 * @param {string} callback - the callback function.
 */
export var create(name, parent = null, callback = null) {

    let e = {};

    e.html = document.createElement(name);

    e.children = [];

    e.setAttribute = (name, value = '') => e.html.setAttribute(name, value);

    e.removeAttribute = (name) => e.html.removeAttribute(name);

    e.getAttribute = (name) => e.html.getAttribute(name);

    e.hasAttribute = (name) => e.html.hasAttribute(name);

    e.addClass = (value) => e.html.classList.add(value);

    e.removeClass = (value) => e.html.classList.remove(value);

    e.containsClass = (value) => e.html.classList.contains(value);

    e.setText = (text) => { e.html.textContent = text; }

    e.setStyle = (property, value) => { e.html.style[property] = value; }

    e.hide = () => e.setStyle('display', 'none');

    e.appendChild = (child) => e.html.appendChild(child);

    e.createChild = (name, callback = null) => this.create(name, e, callback);

    e.on = (event, callback) => e.html.addEventListener(event, callback);

    e.off = (event, callback) => e.html.removeEventListener(event, callback);

    if (parent == null) {

        document.body.lastChild.appendChild(e.html);

    } else if ('html' in parent) {

        parent.children.push(e);

        parent.html.appendChild(e.html);

    } else if ('nodeType' in parent && parent.nodeType === 1) {

        parent.appendChild(e.html);

    } else if (document.querySelector(parent)) {

        document.querySelector(parent).appendChild(e.html);

    }

    if (typeof callback == 'function') {

        callback(e);

    }

    return e;

}
