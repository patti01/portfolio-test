import Highway from "@dogstudio/highway";
import Fade from "./transition";
import { TweenMax } from "gsap";
import $ from "jquery";


// LOADER

if (document.querySelector('.loading')) {
    setTimeout(function () {
        document.querySelector('.loading').classList.add('hidden');
        document.body.removeAttribute('style');
    }, 5000);
}


//TRANSITIONS 

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

// CURSOR CUSTOM
var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".link").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});





// function fixNav() {
//     if (window.scrollY >= topNav) {
//         document.body.style.paddingTop = nav.offsetHeight + 'px';
//         document.body.classList.add('scrolled');
//     } else {
//         document.body.style.paddingTop = 0;
//         document.body.classList.remove('scrolled');
//     }
// }

// window.addEventListener('scroll', fixNav); 