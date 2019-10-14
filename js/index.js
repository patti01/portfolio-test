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

var foil = document.getElementById("foil");
foil.addEventListener('animationend', function (event) {
    // array with texts to type in typewriter
    var dataText = ["Hey There", "I'm Patricia", "I live in Paris", "and I'm a creative developer.", "you may think", "WHAT THE F***K !", "This website is full black", "...with some silly text", "Wait a minute", "Patience is the key!", "I am not bullshitting you"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.getElementById("text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StopTextAnimation();
            }, 200);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }

    function StopTextAnimation() {
        document.querySelector("h1").innerHTML = '<span aria-hidden="true"></span>';
        animate();
    }
    // start the text animation
    StartTextAnimation(0);
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