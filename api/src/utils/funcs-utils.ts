import fs from 'fs';
import path from 'path';

function toDate(date: string): Date {
    const partDate = date.split('/');
    return new Date(Number(partDate[2]), Number(partDate[1])-1, Number(partDate[0]));
}

function dateToString(date: Date): string{
    const day = (date.getUTCDate()<=9)? '0'+String(date.getUTCDate()): String(date.getUTCDate());
    const month = (date.getMonth()+1<=9)? '0'+String(date.getMonth()+1): String(date.getMonth()+1);
    return `${day}/${month}/${String(date.getFullYear())}`;
}

function removeFile(file: string): void {
    const way = path.join(__dirname, '..', '..', 'upload');
    fs.unlink(`${way}/${file}`, (err)=>{
        if(err) throw err;
        console.log('Sucesso!');
    })
}

export {
    toDate,
    removeFile,
    dateToString,
}
