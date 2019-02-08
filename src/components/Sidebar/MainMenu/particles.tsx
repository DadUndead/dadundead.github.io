import { IParticlesParams } from "react-particles-js";
export const PARTICLES_CONFIG: IParticlesParams = {
  "particles": {
    "number": { "value": 53, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#33f0d9" },
    "shape": {
      "type": "star",
      "stroke": { "width": 0, "color": "#000000" },
      "polygon": { "nb_sides": 3 },
      "image": { "src": "img/github.svg", "width": 100, "height": 100 }
    },
    "opacity": {
      "value": 0,
      "random": false,
      "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
    },
    "size": {
      "value": 11.83721462448409,
      "random": true,
      "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.43292125643369117,
      "width": 0.6413648243462091
    },
    "move": {
      "enable": true,
      "speed": 11.22388442605866,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": { "enable": true, "rotateX": 801.7060304327614, "rotateY": 1122.388442605866 }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "repulse" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
      "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8},
      "repulse": { "distance": 200, "duration": 0.4 },
      "push": { "particles_nb": 4 },
      "remove": { "particles_nb": 2 }
    }
  },
  "retina_detect": true
};