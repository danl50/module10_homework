let result = +prompt('Введите значение', '')
if(typeof result !== 'number' || isNaN(result)) {
  alert('Упс, кажется, вы ошиблись')
}  else if (result % 2 === 0) {
  alert('Число чётное')
} else {
  alert('Число нечётное')
}