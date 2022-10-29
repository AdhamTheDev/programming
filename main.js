console.log('Hello World!');

function drk() {
    document.querySelector("body").style.color = 'white';
    document.querySelector("body").style.background = '#0b042b';
    
    document.querySelector("section").style.color = 'black'; 
    
}
function wht() {
    document.querySelector("body").style.color = 'black';
    document.querySelector("body").style.background = 'white';

}
/*let i = 1;
while (i > 0){
   console.log("hello") 
}*/

        let Button = document.querySelector("#button");
        let Dark = document.querySelector("#dark")
        Button.onclick = function() {
            this.classList.toggle("button-after-click");
            Dark.classList.toggle("dark-after-click");
            document.querySelector("body").classList.toggle("body-after-click")
        }
    
function ic() {
    document.getElementById("button").src = "img/pro.jpg";
}
function rel(){
    document.getElementsByClassName("move-up")
}
