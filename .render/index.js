'use strict'

const parse = require('./parse');
const PATHTOEXCEL=__dirname.replace('.render','Номенклатура (2).xlsx');
let table;

const global=document.querySelectorAll('.global')[0];
console.log(global);

let menuHTML=`
<div class="main">
    <div class="overlay"></div>
    <span class="rin">Control your Finance</span>
    <h1>Finance Accounting</h1>
    <div class="first_screen">
        <button class="button">Работать с предыдущей базой данных</button>
        <span>Or</span>
        <div class="divform">
            <form action="" class="form_1">
                <input type="text" name="" id="" placeholder="drop sheet here" class="drop_input">
                <input type="button" value="" class="pop_submit">
            </form>
        </div>
    </div>
</div>
`;
let list=`
<ul class="list">
</ul>
`

global.insertAdjacentHTML('afterbegin',menuHTML);
let buttonAction=document.querySelector('.button');

buttonAction.addEventListener('click',()=>{
    global.innerHTML=list;
    table= parse.main(PATHTOEXCEL);
    for(let key in table){
        document.querySelector('.list').insertAdjacentHTML('afterbegin',
        `<li><div>${table[key].name}</div></li>`
        );
    };      
})

