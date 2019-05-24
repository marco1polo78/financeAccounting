'use strict'

const global=document.querySelectorAll('.global')[0];
console.log(global);

let menu=global.insertAdjacentHTML('afterbegin',`
    <div class="main">
        <div class="overlay"></div>
        <span class="rin">Control your Finance</span>
        <h1>Finance Accounting</h1>
        <div class="first_screen">
            <button>Работать с предыдущей базой данных</button>
            <span>Or</span>
            <div class="divform">
                <form action="" class="form_1">
                    <input type="text" name="" id="" placeholder="drop sheet here" class="drop_input">
                    <input type="submit" value="" class="pop_submit">
                </form>
            </div>
        </div>
    </div>
`);