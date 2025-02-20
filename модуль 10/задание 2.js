const meaning = 5;
x = (typeof meaning);

switch (x) {
  
  case 'number':
    console.log('Число');
    break;
  
  case 'string':
    console.log('Cтрока');
    break;
  
  case 'boolean':
    console.log('Логический типи');
    break;
  
  default:
  console.log('Тип x не определён');
}
