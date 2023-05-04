let x = 'fas'

switch (typeof x) {
    case 'number':
        console.log('х-число');
    break;
    case 'string':
        console.log('х-строка');
    break;
    case 'boolean':
        console.log('х-логический тип');
    break;
    default: 
    console.log('Тип х не определён')
}