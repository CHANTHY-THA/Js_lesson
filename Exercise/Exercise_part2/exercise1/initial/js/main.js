let text = "hello world [JavaScript] we [are] strong!";
// TODO: 
// YOUR CODE HERE
let right = true
let word = ''
for (i = 0; i < text.length; i++) {
    if (right && (text[i] == '[' )){
        right = false
    }else if (right){
        word += text[i]
    }else if (text[i] == ']'){
        right = true
    }
};
console.log(word)
// output: hello world we strong!


