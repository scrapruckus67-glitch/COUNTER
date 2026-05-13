//the process for the timer is simple but has many steps start with when you click on the start btn it goes on to sec and does +1 every time and does it in the the set interval of 1000ms and then put the condition loop to reset the second at every 59s 
let cntrl = document.querySelector(".strt-btn")
let sec = document.querySelector(".sec")
let min = document.querySelector(".min")
let t = "00"
let m = "00"

cntrl.addEventListener("click", function () {
    console.log("clicked")
    let timer = setInterval(() => {
        t = (parseInt(t) + 1).toString().padStart(2, '0')
        sec.innerText = t
        if(t==60){
            t="00"
            sec.innerText = t
            m = (parseInt(m) + 1).toString().padStart(2, '0')
            min.innerText = m
        }

    }, 1000);
    let stop = document.querySelector(".stop-btn")
    stop.addEventListener("click", function () {
        clearInterval(timer)
    })
    let rst = document.querySelector(".rst-btn")
    rst.addEventListener("click", function () {
        clearInterval(timer)
        t = "00"
        m = "00"
        sec.innerText = t
        min.innerText = m
    })
});