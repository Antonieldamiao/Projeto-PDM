function formatDate(date: Date): string{
    const day = (date.getUTCDate()<=9)? '0'+String(date.getUTCDate()): String(date.getUTCDate());
    const month = (date.getMonth()+1<=9)? '0'+String(date.getMonth()+1): String(date.getMonth()+1);
    return day+'/'+month+'/'+String(date.getFullYear());
}

function maskPhone(value: string): string {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1)$2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
}

export {
    maskPhone,
    formatDate
}