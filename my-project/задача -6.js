const arr = [1, 2, 3, 2, 0, 0, 3]
let zero = 0;
let evenNumber = 0;
let oddNumber = 0;
for(let i = 0; i < arr.length; i++) {
    if(typeof (arr[i] == 'number')) {
        if(arr[i] === 0 ) {
            zero = zero + 1
        } else if (arr[i] % 2 === 0) {
            evenNumber = evenNumber + 1
        } else if (arr [i] % 2 !== 0) {
            oddNumber = oddNumber + 1
        }
    }
}
console.log(zero)
console.log(evenNumber)
console.log(oddNumber)