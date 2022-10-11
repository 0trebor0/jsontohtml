# jsontohtml
JavaScript JSON to HTML
## Please Give it a Star :)
## Example
```bash
<script src="https://0trebor0.github.io/jsontohtml/web/dist/main.js"></script>

window.onload = ()=>{
    let div = App.create({
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
