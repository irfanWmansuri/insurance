const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});

function circleFollower() {
    window.addEventListener("mousemove",function (dets){
        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}
circleFollower();

//var crsr = document.querySelector("#cursor");
// document.addEventListener("mousemove", function (dets) {
//     crsr.style.left = dets.x  + "px";
//     crsr.style.top = dets.y +  "px";
// });


// var h4all = document.querySelectorAll(".servicebox, .navsec a");
// h4all.forEach(function (elem) {
//     elem.addEventListener("mouseenter", function () {
//         crsr.style.scale = 4;
//         crsr.style.border = ".1px solid #faa343";
//         crsr.style.backgroundColor = "transparent";
//         crsr.style.transition= ".5s ease"
//     });
//     elem.addEventListener("mouseleave", function () {
//         crsr.style.scale = 1;
//         crsr.style.border = "0px solid #faa343";
//         crsr.style.backgroundColor = "#faa343";
//     });
// });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots:false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


