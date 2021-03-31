const granparent = document.querySelector('.grandParent');
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

// boomble event 
granparent.addEventListener('click' , e=> {
    console.log('Grandparent')
})
parent.addEventListener('click' , e=> {
    // stop event 
    e.stopImmediatePropagation();
    console.log("Parent")
})
child.addEventListener('click' , e=> {
    console.log("Chile")
})

//capture event
granparent.addEventListener('click' , e=> {
    e.stopImmediatePropagation();
    console.log('Grandparent')
} ,{capture: true});
parent.addEventListener('click' , e=> {
    console.log("Parent")
},{capture: true})
child.addEventListener('click' , e=> {
    console.log("Chile")
},{capture: true})