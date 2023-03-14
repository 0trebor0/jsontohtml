# jsontohtml
JavaScript JSON to HTML
## Please Give it a Star :)
## Example
```bash
<script src="https://0trebor0.github.io/jsontohtml/web/dist/main.js"></script>

window.onload = ()=>{
    let div = App.create({
        type:'div',
        parent:document.body,
        content:[
            {
                type:'h1',
                content:'Its Working',
                attributes:[{type:'style',content:'color:red;'},{type:'class','content':'imTest2'}],
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
    returns DOM
}
```
