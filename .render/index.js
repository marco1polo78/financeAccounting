'use strict'

const parse = require('./parse');
const PATHTOEXCEL=__dirname.replace('.render','Номенклатура (2).xlsx');
let table,listClass;
const fs=require('fs');
let users =JSON.parse(fs.readFileSync(__dirname.replace(/\.render/i,'database\\'+'users.json'))).users;

const global=document.querySelector('.global');

let menuHTML=`
<div class="main">
    <div class="overlay"></div>
    <span class="rin">Control your Finance</span>
    <h1>Finance Accounting</h1>
    <div class="first_screen">
        <form class="form-3">
            <p class="clearfix">
                <label for="login">Логин</label>
                <input type="text" name="login" id="login" placeholder="Логин">
            </p>
            <p class="clearfix">
                <label for="password">Пароль</label>
                <input type="password" name="password" id="password" placeholder="Пароль">
            </p>
            <p class="clearfix">
                <input type="checkbox" name="remember" id="remember">
                <label for="remember">Запомнить меня</label>
            </p>
            <p class="clearfix">
                <input type="button" name="button" value="Войти" class="button">
            </p>      
        </form>
    </div>
</div>
`;
let list=`
<ul class="column">
    <li>Наименование</li>
    <li>id покупателя</li>
    <li>id поставщика</li>
    <li>Остаток</li>
    <li>Цена покупки</li>
    <li>Цена продажи</li>
</ul></li>
<ul class="list">
</ul>
`

global.insertAdjacentHTML('afterbegin',menuHTML);
let buttonAction=document.querySelector('.button');
console.log(users.users);

buttonAction.addEventListener('click',()=>{
    if(!users.find(e=>e.login===login.value && e.password===password.value)){
        alert('Невірний логін або пароль');
        return;
    }      
    table = parse.main(PATHTOEXCEL);
    getTable(table);
    let entry;

    function getTable(table){
        global.innerHTML=list;
        for(let key in table){
            document.querySelector('.list').insertAdjacentHTML('beforeend',
            `<ul class="entry" name="${table[key].name}">
            <li>${table[key].name}</li>
            <li>${table[key].idcustomer[0] || ''}</li>
            <li>${table[key].idprovider[0] || ''}</li>
            <li>${table[key].remainder}</li>
            <li>${table[key].priceComing}</li>
            <li>${table[key].salesPrice}</li>
            </ul>`
            );
        };
        listClass=document.querySelectorAll('.entry');

        listClass.forEach(li=>{
            li.addEventListener('click',(e)=>{
                entry=e.currentTarget;
                getEntry(table,entry);
    
                back.addEventListener('click',()=>getTable(table));
            }, false);
        })
    }

    function getEntry(table,entry){
        name=entry.getAttribute('name');
        global.innerHTML=
        `<div class="header">
        <img src="../img/back.png" id="back">
        <h2>${table[name].name}</h2>
        </div>
        <ul class="column">
            <li>Наименование</li>
            <li>id покупателя</li>
            <li>id поставщика</li>
            <li>Остаток</li>
            <li>Цена покупки</li>
            <li>Цена продажи</li>
        </ul></li>
        <ul class="list">
        </ul>
        `;
        document.querySelector('.list').insertAdjacentHTML('beforeend',
        `<ul class="entry non_border" name="${table[name].name}">
        <li>${table[name].name}</li>
        <li>${getIdCustomer(table)}</li>
        <li>${getIdProvider(table)}</li>
        <li>${table[name].remainder}</li>
        <li>${table[name].priceComing}</li>
        <li>${table[name].salesPrice}</li>
        </ul>`
        );

        function getIdCustomer(table){
            let text='';
            if(table[name].idcustomer.length!==0){
                table[name].idcustomer.forEach(e=>{
                    text+=e+'<br>'
                })
            }
            return text;
        }

        function getIdProvider(table){
            let text='';
            if(table[name].idprovider.length!==0){
                table[name].idprovider.forEach(e=>{
                    text+=e+'<br>'
                })
            }
            return text;
        }

        console.log(entry.getAttribute('name'));
    }

    function validation(table,entry){

    }

})
