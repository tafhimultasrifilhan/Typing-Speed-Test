var a = document.getElementById('btn');
var b = document.getElementById('loader');
var c = document.getElementById('text');
var d = document.getElementById('pauseBtn');
var e=document.getElementById('timer');
var sec = 0;
function hello() {
    a.style.display = 'none';
    b.style.display = 'block';
    setTimeout(() => {
        b.style.display = 'none';
        c.style.display = 'block';
        d.style.display = 'block';
        var timer;
        var ele = document.getElementById('timer');
        (function() {
            timer = setInterval(() => {
                ele.innerHTML =  sec;
                sec++;
            }, 1000) // each 1 second
        })()
    }, 2000);
}
function sub(){
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'none';
    var min=sec/60;
    var speed=(347/50)/min;
    var x=Math.round(speed);
    document.getElementById("p1").innerHTML = "Your Typing Speed is "+x+" WPM";
}