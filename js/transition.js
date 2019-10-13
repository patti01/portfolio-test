import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';

class Fade extends Highway.Transition {
    in({ from, to, done }) {

        const $frameBlue = document.querySelector('.page-transition__blue');
        const $frameBlack = document.querySelector('.page-transition__black');
        const tl = new TimelineLite();

        tl.fromTo($frameBlack, 2.2, { autoAlpha: 1, scaleX: 0 }, { scaleX: 1, transformOrigin: 'right', ease: Power4.easeInOut })
            .fromTo(to, 0.5, {
                right: '-100%', top: '0%'
            }, {
                right: '0%', onComplete: function () {
                    from.remove();
                    done();
                }
            }).fromTo($frameBlue, 2.2, { scaleX: 0 }, { autoAlpha: 1, zIndex: 101, scaleX: 1, transformOrigin: 'right', ease: Power4.easeInOut }, .2)

            .set($frameBlack, { scaleX: 0 })
            .to($frameBlue, 2, {
                scaleX: 0, transformOrigin: 'left', ease: Bounce.easeOut
            })

            .fromTo(to, 0.5, { scaleX: 1 }, {
                scaleX: 1, transformOrigin: 'right', ease: Power4.easeInOut
            })
            ;
    }
    out({ from, done }) {
        done();
    }
}

export default Fade;

