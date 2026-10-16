const click = document.getElementById("b1")
const reset = document.getElementById("reset")
const upgrade = document.getElementById("up")

let count = 0;

click.onclick = function(){
    count ++;
    document.getElementById("c").textContent = count
}
reset.onclick = function(){
    count = 0;
    document.getElementById("c").textContent = count
}
