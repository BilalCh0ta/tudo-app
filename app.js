// let input = document.querySelector("#inputTodo");
// let ol = document.querySelector("ol");
// let arr = [];

// function runTodo() {
//     ol.innerHTML = "";
//     arr.push(input.value);
//     inputTodo.value = "";
//     // console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//         ol.innerHTML += `<li>${arr[i]}
//         <button onclick="deletTodo(${i})">Delete</button> <button onclick=
//         "editTodo(${i})">Edit</button>
//         </li>`

//     }



// }


// function deletTodo(index) {
//     ol.innerHTML="";
//     console.log(delete todo, index)
//     arr.splice(index , 1 )

//     for (let i = 0; i < arr.length; i++) {
//         ol.innerHTML += `<li>${arr[i]}
//         <button onclick="deletTodo(${i})">Delete</button> <button onclick=
//         "editTodo(${i})">Edit</button>
//         </li>`

//     }
// }



// function editTodo(index) {
//     ol.innerHTML=""
//     // console.log(edit todo, index);
//     let updatedvalue = prompt("Enter Updated Value");
//     arr.splice(index,1,updatedvalue)
//     for (let i = 0; i < arr.length; i++) {
//         ol.innerHTML += `<li>${arr[i]}
//         <button onclick="deletTodo(${i})">Delete</button> <button onclick=
//         "editTodo(${i})">Edit</button>
//         </li>`

//     }
// }



// third time 


let input  = document.querySelector("#input");
let output = document.querySelector(".output")
let arr = []



function same(){
    output.innerHTML = ""
input.value = ''

    for (i = 0 ;i <arr.length ; i++){
    
        output.innerHTML +=    `<div class="ans d-flex mt-2  justify-content-between align-items-center"> 
        <div class="ans1">
             ${arr[i]}
            
        </div>
        <div class="ans2">

            <button class = "btn2 " onclick="delValue(${i})"> <i class="fa-solid  fa-trash"></i></button>
            <button class = " btn3 text-white" onclick="editValue(${i})">  <i class="fa-regular fa-pen-to-square"></i></button>
        </div>
        
    </div>`

    }  

}


function printValue(){
    if(input.value === ''){
        alert("please enter something")
    }else{
        
        arr.push(input.value)
        console.log(arr);
    
    same()
}

}

function delValue(index){

    arr.splice(index , 1)
    same()

}

function editValue(ok){
    let update = prompt('enter edit value')
    arr.splice(ok    , 1 , update)

    same()
}


















































































































































































