let inc = document.querySelector(".icon2");
let count = document.querySelector(".count");
let dec = document.querySelector(".icon1")
let v = 0;
let str = document.querySelector(".rstbtn")
let timer = document.querySelector(".timer")

inc.addEventListener("click", function() {
    v = v + 1;
    count.innerText = v;
    localStorage.setItem("count",v)
});
dec.addEventListener("click",function(){
        v=v-1
    count.innerText = v;
    localStorage.setItem("count",v)
})


str.addEventListener("click", function() {
    
    let po = localStorage.getItem("count");

    count.innerText = po;

});

