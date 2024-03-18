let fInput = document.querySelector('#input-1')
let fAnswer = document.querySelector('#answer')
let output = document.querySelector(".output")
let eAnswer = document.querySelector('.ans')


function firstClick(){

    fAnswer.innerHTML = fInput.value
    fInput.value = ''
    
    
}

function delClick(){
output.innerHTML = ""
}

function editClick(){
    eAnswer.innerHTML = prompt('edit')
}
