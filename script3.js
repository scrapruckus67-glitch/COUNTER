let input = document.querySelector(".input") 
let addtask = document.querySelector(".add-btn") 
let tasklist = document.querySelector(".taskbar") 
let deadline = document.querySelector(".time") 

addtask.addEventListener("click", function(){ 
    let task = input.value 
    let li = document.createElement("li") 
    
    li.innerHTML = `${task} ${deadline.value} 
        <div class="dlt-btn"><i class="fa-solid fa-trash-can" style="color: rgb(207, 200, 168);"></i></div> 
        <div class="edit-btn"><i class="fa-solid fa-pen-to-square" style="color: rgb(207, 200, 168);"></i></div>` 
    
    // FIX: Search inside 'li' instead of 'document'
    let dltbtn = li.querySelector(".dlt-btn") 
    let editbtn = li.querySelector(".edit-btn") 
    
    dltbtn.addEventListener("click", function(){ 
        li.remove() // Removes the task from the screen
        localStorage.setItem("tasks", tasklist.innerHTML) // Updates storage after deleting
    }) 

    editbtn.addEventListener("click", function(){
        console.log("edit clicked")
        let newtask = prompt("edit your task and deadline", task)
        if(newtask){
            task = newtask
            li.firstChild.textContent = `${task} ${deadline.value} ` // Update the task text
            localStorage.setItem("tasks", tasklist.innerHTML) // Updates storage after editing
        }
    })
    
    tasklist.appendChild(li) 
    input.value = "" 
    deadline.value = "" 
    localStorage.setItem("tasks", tasklist.innerHTML) 
}) 

let geettask = document.querySelector(".get-btn") 
geettask.addEventListener("click", function(){ 
    tasklist.innerHTML = localStorage.getItem("tasks") 
})


