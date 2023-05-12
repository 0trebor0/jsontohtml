# jsontohtml
JavaScript JSON to HTML
## Please Give it a Star :)
## Example
```bash
<script src="https://0trebor0.github.io/jsontohtml/web/dist/main.js"></script>

window.onload = ()=>{
    let div = App.jsontohtml({
        type:'div',
        attributes:[{type:'style',content:'color:red;'},{type:'class','content':'imTest2'}],
        content:[
            {
                type:'h1',
                content:'Its Working WIth a function',
                onclick:(e)=>{
                    console.log( 'I clicked' );
                }
            },
            {
                type:'p',
                content:'IM p',
                onclick:(e)=>{
                    console.log( 'I clicked' );
                },
                class:['Imtest']
            },
            {
                type:'p',
                content:'IM p',
            },
            {
                type:'p',
                content:'IM p',
            },
            {
                type:'div',
                content:[
                    {
                        type:'a',
                        content:'HEY',
                        attributes:[{type:'href','content':'./test'}]
                    }
                ]
            }
        ],
        parent:document.body
    });
    console.log( [div] );
    create('video',maindiv.children[4].html).attribute.add('src','./test');
    create('video',maindiv.children[4].html,(e)=>{
        console.log(e);
        e.html.autoplay = true;
    })
}
```
