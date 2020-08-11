gsap.registerPlugin(MotionPathPlugin);
var action = gsap.timeline({ defaults: { ease: "none" } }).
to(".ball01", { autoAlpha: 1, duration: 0.01 }).
from(".theGreenLine", { drawSVG: 0, duration: 1 }, 0).
to(".ball01", { duration: 1,  motionPath: { path: ".theGreenLine", align: ".theGreenLine",  autoRotate: true,  alignOrigin: [0.6, 0.5] } },  0);


var Controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#svgline",
    duration: 3000,
    triggerHook: 0.7
}).
setTween(action)
    .addTo(Controller);
