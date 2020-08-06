# jsontohtml
JSON to HTML on Browser 

## Example
```bash
window.onload = ()=>{
    let div = app.create({
        name:'div',
        parent:document.body,
        body:[
            {
                name:'h1',
                body:'Its Working',
                attribute:{'style':'color:red;text-align:center;'},
                class:['Imtest'],
                onclick:(e)=>{
                    console.log( e );
                }
            }
        ],
        oncreate:(e)=>{
            console.log( [e] );
        }
    });
    console.log( [div] );
}
```