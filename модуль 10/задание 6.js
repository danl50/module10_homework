let arr = [5, 5, 5]; 
let allEqual = true; 

for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
        allEqual = false; 
        break; 
    }
}

console.log(allEqual);