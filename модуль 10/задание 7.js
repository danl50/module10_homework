let arr = [1, 2, 3, 4, 0, null, 'a', 5]; 
let evenCount = 0; 
let oddCount = 0; 
let zeroCount = 0; 

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') { 
        if (arr[i] === 0) {
            zeroCount++;
        } else if (arr[i] % 2 === 0) {
            evenCount++; 
        } else {
            oddCount++; 
        }
    }
}

console.log(`Четные элементы: ${evenCount}`);
console.log(`Нечетные элементы: ${oddCount}`);
console.log(`Нулевые элементы: ${zeroCount}`);