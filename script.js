let start = new Date();
function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
   for(let i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random()*16)];

}return color;
}
function Reaction(){
    start = new Date().getTime();
    document.querySelector(".container").style.display = 'block';
    document.querySelector(".container").style.backgroundColor =randomColor();
}
Reaction();
document.querySelector(".container").onclick = function(){
    document.querySelector(".container").style.display = 'none';
    let end = new Date().getTime();
    let timeTaken = end - start;
    alert(timeTaken);
    Reaction();
}
