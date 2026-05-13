let input = document.querySelector(".input")
let addtask = document.querySelector(".add-btn")
let tasklist = document.querySelector(".taskbar")
addtask.addEventListener("click",function(){
    let task = input.value
    let li = document.createElement("li")
    li.textContent = task
    tasklist.appendChild(li)
    input.value = ""
})