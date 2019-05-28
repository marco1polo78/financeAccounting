'use strict'
const PATHTOEXCEL=process.argv[2];
const excelCsv = require('excelcsv');

let table={};
let sheet1=false,sheet2=false,sheet3=false;
let IdProvider='';
let IdCustomer=[];

let parser = new excelCsv(PATHTOEXCEL);

let csv=parser
    .row(row=>{
        if(sheet3 && (row[1]!=='' || row[3]!=='' || row[5]!=='' || row[7]!=='' ||row[9]!=='')){
            // console.log(row);
            for(let i=0;i<row.length/2;i++){
                if(row[i*2]!=='')
                    IdCustomer.push(row[i*2]);
                if(row[(i*2)+1]!=='')
                    if(table[row[i*2+1]])
                        table[row[i*2+1]].idcustomer.push(IdCustomer[i]);
            }
        }
        if(row[0]==='покупатели' && row[1]==='покупаемый товар'){
            sheet2=false;
            sheet3=true;
        }  
        if(sheet2 && row[1]!==''){
            if(row[0]!=='')
                IdProvider=row[0];
            if(table[row[1]])
                table[row[1]].idprovider.push(IdProvider);
        }
        if(row[0]==='Поставщики' && row[1]==='товар который поставляет'){
            sheet1=false;
            sheet2=true;
        }
        if(sheet1 && row[1]!==''){
            table[row[1]]={
                name:row[1],
                idcustomer:[],
                idprovider:[],
                remainder:parseInt(row[4]),
                priceComing:Math.round(row[5]*100)/100,
                salesPrice:Math.round(row[6]*100)/100
            }
        }
        if(row[1]==='Наименование' && row[2]==='id покупатель' && row[3]==='id поставщик')
            sheet1=true;     
    })
    .init();

console.log(table['шланг ГАЗ 1/2*1,2м ВВ']);
module.exports={
    
}