let numbers = [1, 3, 5, 0, 2, 0, 1, 1, 2, 3];
// TODO: 
// YOUR CODE HERE
let result = 0 ;
let isFound = false ;
for (let i = 0 ; i < numbers.length ; i++){
    if (isFound){
        result += numbers[i];
    }if(numbers[i] == 0){
        isFound = false;
    }if(numbers[i] == 1){
        isFound = true;
    }
};
console.log(result);
// output: 14 becuase 3 + 5 + 1 + 2 + 3





