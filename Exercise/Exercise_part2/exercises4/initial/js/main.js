// case 1:
let arr = [1, 3, 6, 7, 9];
// TODO: 
// YOUR CODE HERE
let num = 0
let count = 0
for (let i = 0 ; i < arr.length ; i++){
    if (arr[i] > num ){
        count = arr[i]
    }
    num = arr[i]
}
for (let n = 0 ; n < arr.length ; n++){
    if (arr[n] < 5 ){
        arr.splice(n,1,count);
    }
}
console.log(arr);


// output: [9, 9, 6, 7, 9]

