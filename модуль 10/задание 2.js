const meaning = 5;
x = (typeof meaning);

switch (x) {
  
  case 'number':
    console.log('Число');
    break;
  
  case 'string':
    console.log('Cтрока');
    break;
  
  default:
  console.log('Логический тип');
}