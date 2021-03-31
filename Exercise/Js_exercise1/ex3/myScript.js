

// console.log('Hello'.toLowerCase());
// console.log(isNaN('hello'));
// console.log('Hello'.toUpperCase());

// let x = 4 
// let y = 8
// if (x <5 , y > 6 ){
//     console.log('monday')
// }else if( x >10 ){
//     console.log('friday')
// }else{
//     console.log('sunday')
// }

// console.log('abcd'.substr(1,1))

// let x = prompt("Enter number:");
// while(x != 5){
//     console.log('try again');
//     x = prompt("Enter :");
// }

// document.write('the best team');

// let x = 10
// x += 1
// console.log(x)
// let str = 'hello'
// console.log(str.charAt(0));

// let dic = {'helllo':25,'kaka':50}
// for (let key in dic) {
//     console.log(dic[key])
// }
// let dic = {'ronan':14,'rice':12,'fruit':15};
// delete dic['ronan'] ;
// console.log(dic);

// -----------------------------------------------------------------------------------------
// -----------------

// ------------------------------------------------------------------------------
//	EXERCICE 2 
// ------------------------------------------------------------------------------

// Input to test
// let testCase = "hello! welcome to web programing at pnc"
let testCase = "him is cute girl";
// let testCase = ""
 

// Write your code here
let text = '' ;
let first = '' ;
let array = [] ;
let isText = false;
let isFound = true;
for (index in testCase){
    value = testCase[index]
    if (value != ' ' ){
        first = value
        if (isFound){
            first = value
            first.toUpperCase();
        }
        text += first
        isFound = false

    }else if (value == ' ' ){
        isFound = true
        array.push(text)
        text = ''
    };
}if (index == testCase.length - 1){
    array.push(text)
};

console.log(array);