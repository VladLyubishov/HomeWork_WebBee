
    window.addEventListener("load",function() {
    var but1 = document.getElementById("act");
    var but2 = document.getElementById("m");
    var but3 = document.getElementById("t");
    var but4 = document.getElementById("r")
    var display1 = document.getElementById("activity");
    var display2 = document.getElementById("map");
    var display3 = document.getElementById("timer");
    var display4 = document.getElementById("accordionExample_map");
    var display5 = document.getElementById("accordionPanelsStayOpenExample_time")
    var display6 = document.getElementById("res")
    var s_act = document.getElementById("act_style");
    var s_m = document.getElementById("m_style");
    var s_t = document.getElementById("t_style");
    var s_r = document.getElementById("r_style")
    var prel = document.getElementById("preloader");



    if (prel != null){
    prel.style.display = "none"
};


    but1.onclick = function () {
    display1.style.display = "block";
    display2.style.display = "none";
    display3.style.display = "none";
    display4.style.display = "none";
    display5.style.display = "none";
    display6.style.display = "none";
    but1.style.background = "#F1F1F1";
    but2.style.background = "#FAFAFA";
    but3.style.background = "#FAFAFA";
    but4.style.background = "#FAFAFA";
}
    but2.onclick = function () {
    display1.style.display = "none";
    display2.style.display = "block";
    display4.style.display = "block"
    display5.style.display = "none"
    display3.style.display = "none";
    display6.style.display = "none";
    but1.style.background = "#FAFAFA";
    but2.style.background = "#F1F1F1";
    but3.style.background = "#FAFAFA";
    but4.style.background = "#FAFAFA";
}
    but3.onclick = function () {
    display1.style.display = "none";
    display2.style.display = "none";
    display3.style.display = "block";
    display4.style.display = "none";
    display5.style.display = "block";
    display6.style.display = "none";
    but1.style.background = "#FAFAFA";
    but2.style.background = "#FAFAFA";
    but3.style.background = "#F1F1F1";
    but4.style.background = "#FAFAFA";
}
    but4.onclick = function () {
    display1.style.display = "none";
    display2.style.display = "none";
    display3.style.display = "none";
    display4.style.display = "none";
    display5.style.display = "none";
    display6.style.display = "block";
    but1.style.background = "#FAFAFA";
    but2.style.background = "#FAFAFA";
    but3.style.background = "#FAFAFA";
    but4.style.background = "#F1F1F1";
}
}, false);


    window.addEventListener("load",function() {
    var startTime = new Date().getTime();
    var timer = setInterval(function() {
    var now = new Date().getTime();
    var distance = now - startTime;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (hours < 10) {
    hours = "0" + hours;
}
    if (minutes < 10) {
    minutes = "0" + minutes;
}
    if (seconds < 10) {
    seconds = "0" + seconds;
}
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000);
}, false);

    ymaps.ready(init);
    function init() {
    var myMap = new ymaps.Map("map", {
    center: [56.739510, 37.224892],
    zoom: 11
});
    var myPlacemark = new ymaps.Placemark([56.739510, 37.224892], null, {
    preset: 'islands#redDotIcon'
});
    myMap.geoObjects.add(myPlacemark);
}

const  preloaderWrapper = document.querySelector('.preloader-wrapper');

window.addEventListener('load', function() {
   preloaderWrapper.classList.add('fade-out-animation');
});
