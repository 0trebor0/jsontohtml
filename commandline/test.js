let html = (object)=>{
    for( t in object ){
        console.log(t);
        console.log(object[t]);
    }
}
let test = {
    'div':{
        attributes:{},
        content:{
            'div':{
                
            }
        }
    }
};
html( test );