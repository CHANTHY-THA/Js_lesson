
// ******** NOTE***************************
// For each exercices, you code shall work for all the test cases !!

// ------------------------------------------------------------------------------
//	EXERCICE 1 
// ------------------------------------------------------------------------------

// Input to test

// let testCase = [] ;
// let testCase =[22, 33,24, 2];
// let testCase =[22, 33, 44, -22];
// let testCase =[21, 33, 44,66];


// Write your code here


// let isFall = false;
// let isTrue = false;
// for (i = 0; i <= testCase.length ; i++){
//     if (testCase.length == 0){
//         console.log('Array is empty')
//     };
//     if ((testCase[i] < 9) && (!(isFall))){
//         isFall = true
//         isTrue = false
//     }
//     if ((testCase[i] > 9) && (!(isTrue))){
//         isTrue = true
//     }
// };
// if (isFall){
//     console.log('Invalid array')
// };
// if (isTrue){
//     console.log('Valide')
// };



// ------------------------------------------------------------------------------
//	EXERCICE 2 
// ------------------------------------------------------------------------------

// Input to test
// let testCase = "hello! pig"
// let text = '' ;
// let first = '' ;
// let array = [] ;
// let isText = true;
// let isFound = true;
// for (index in testCase){
//     value = testCase[index]
//     if (value == 'w'){
//         isText = false
//     }
//     if (value != ' ' && isText ){
//         first = value
//         if (isFound){
//             first = value.toUpperCase();
//         }
     
//         isFound = false
//         text += first 
//     }else if (value == ' '){
//         isFound = true
//         isText = true
//         if (text.length > 0){
//             array.push(text)
//         }
//         text = ''
//     }  
// }if (index == testCase.length - 1){
//     array.push(text)
// };
// console.log(array);



// ------------------------------------------------------------------------------
//	EXERCICE 3
// ------------------------------------------------------------------------------

// Input to test

let testCase = [2.2,5,3];
// let testCase = [2, 1, 2, 3.45, 78.3]
// let testCase = [2, 1, 3, 4]
for (let i = testCase.length-1; i>= 0 ; i--){
    if (!Number.isInteger(testCase[i])){
        testCase.splice(i,1);
    };
}
console.log(testCase);

// ------------------------------------------------------------------------------
//	EXERCICE 4
// ------------------------------------------------------------------------------

// Input to test
// let students = ["Romdul", "RomChong", "Kolap"]
// let countries = ["Canada", "Cambodia", "Thai"]
// let majors = ["SNA", "WEB", "Database"]

// Write your code here

// let array = [];
// let dic = {} ;
// for (index in students){
//     dic.["student"] = students[index]
//     dic.country = countries[index]
//     dic.major = majors[index]
//     array.push(dic)
//     dic = {}
// }
// console.log(array);