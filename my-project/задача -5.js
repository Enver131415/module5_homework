const arr = [3,3,3,3,3,3,3];
let a = 'true';
for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] !== arr[i + 1] ) {
         a = 'false';
    }
}
console.log(a)