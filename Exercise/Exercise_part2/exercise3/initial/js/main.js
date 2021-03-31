let arrOne = [1, 3, 6, 7, 9];
let arrTwo = [4, 3, 5, 9, 1];
// TODO: 
// YOUR CODE HERE

let max = [] ;
for (i = 0 ; i< arrOne.length; i++){
    if (arrOne[i] >= arrTwo[i]){
        max.push(arrOne[i]);
    }
    else{
        max.push(arrTwo[i]);
    }
};
console.log(max);
// output: [4, 3, 6, 9, 9]
