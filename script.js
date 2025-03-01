let spa1 = document.getElementById('span1')
let spa2 = document.getElementById('span2')
let spa3 = document.getElementById('span3')
let spa4 = document.getElementById('span4')

let i = 1;
let x = setInterval(function(){
    if (i <= 400) {
        spa1.innerHTML = i
    }else{
        clearInterval(x)
    }
    i++
})

let c = 1;
let y = setInterval(function(){
    if (c <= 340) {
        spa2.innerHTML = c
    }else{
        clearInterval(y)
    }
    c++
},6)

let q = 1;
let f = setInterval(function(){
    if (q <= 225) {
        spa3.innerHTML = q
    }else{
        clearInterval(f)
    }
    q++
},10)
let s = 1;
let r = setInterval(function(){
    if (s <= 280) {
        spa4.innerHTML = s
    }else{
        clearInterval(r)
    }
    s++
},8)