// let fInput = document.querySelector('#input-1')
// let fAnswer = document.querySelector('#answer')
// let output = document.querySelector(".output")
// let eAnswer = document.querySelector('.ans')
// var display = 0;

let parentAnswer = document.querySelector(".s")
let input = document.querySelector("#inp")
let answer = document.querySelector(".ans")
let display = 0


function printValue(){
    if(display = 1){
parentAnswer.style.display = "block"
display = 1
    }
    else{
        parentAnswer.style.display = "none"
        display = 0
    }
    
    if(input.value == ''){
        alert("please enter something")
    }
    answer.innerHTML = input.value
    input.value = ''
}










// function firstClick(){
// for( let i = 1 ; i < 11 ; i++ ){
// if(display = 1){
//     output.style.display = "block"
//     display = 1
// } 
//  else{
//     output.style.display = "none"
//     display = 0
//  }
     
//     fAnswer.innerHTML = fInput.value
//     fInput.value = ''
// }
  


// }


// function delClick(){
// output.innerHTML = ""
// }


// function editClick(){
//     eAnswer.innerHTML = prompt('edit')
// }


