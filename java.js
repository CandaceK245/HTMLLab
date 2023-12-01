var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("myPopup").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("myPopup").innerHTML = "EXPIRED";
    }
}, 1000);

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
console.log("Hello World");

var now = new Date().getFullYear();
document.getElementById("footerInfo").innerHTML= "&copy; " + now.toString() + " Candace K."
function myalert(){
    alert("Happy Holidays!");
}
document.getElementById("surpriselink").onmouseover = () => {
        document.getElementById("surpriselink").innerText = 'Surprise!';
};
document.getElementById("surpriselink").onmouseleave = () => {
    document.getElementById("surpriselink").innerText = 'Something Fun!';
};

let count = 1;
document.getElementById("btn-counter").onclick = () => {
        count = count + 1;
        document.getElementById('txt-counter').innerHTML = "Number:"+count;
        if (count % 2 == 0){
            document.getElementById("txt-counter").classList.remove('odd');
            document.getElementById("txt-counter").classList.add('even');
        }
        else {
            document.getElementById("txt-counter").classList.remove('even');
            document.getElementById("txt-counter").classList.add('odd');
        }
}
for (let i = 0; i++ < 100;) {
    var list = document.getElementById("numbers");
    var listitem = document.createElement("li");
    if (i % 2 == 0){
        listitem.innerHTML="even";
    }
    else {
        listitem.innerHTML="odd";
    }
    
    list.append(listitem);
}