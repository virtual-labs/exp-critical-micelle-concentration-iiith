//Your JavaScript goes in here
'use strict';
const steps = [0.000, 0.040, 0.070, 0.100, 0.150, 0.300, 0.350, 0.400, 0.500, 0.600, 0.800, 1.000, 1.300, 1.500, 2.000, 2.500, 3.000, 4.000];
const readings = [2.42, 2.44, 2.45, 2.47, 2.51, 2.57, 2.61, 2.66, 2.71, 2.66, 2.57, 2.48, 2.41, 2.36, 2.32, 2.36, 2.41, 2.54];
const messages = [
    "Select the concentration value of SDS (in 100 mol/L) and click on submit.",
    "Click on the beaker with solution to meaure the reading.",
    "Click on the bottle of water to clean the conductance rod."
];
document.getElementById("slider_value").innerHTML=steps[0].toFixed(3);
document.getElementById("message").innerHTML=messages[0];

let slider_step_index = 0;
function show_value(x)
{
    slider_step_index = x-1;
    document.getElementById("slider_value").innerHTML=steps[x-1].toFixed(3);
}

let rod_flag = 1;

$("#slider").slider({
    range: true,
    min: 0,
    max: steps.length-1,
    step: 1,
    // values: initSteps
});

function move_pouring_beaker() {
    rod_flag = 1;
    const animation_1 = anime.timeline({
        targets:'#pouring-solution',
        duration: 500,
        easing: 'linear',
    })
    .add({
        opacity: 0.5
    })
    .add({
        translateY: '-6vw'
    })
    .add({
        translateX: '6vw',
    })
    .add({
        rotateZ: '80'
    })
    .add({
        opacity: 0
    });

    const animation_2 = anime.timeline({
        targets: "#pouring-beaker",
        duration: 500,
        easing: 'linear',
    })
    .add({
        opacity: 0.5
    })
    .add({
        translateY: '-6vw'
    })
    .add({
        translateX: '6vw',
    })
    .add({
        rotateZ: '80'
    })
    .add({
        delay: 500,
        rotateZ: '0',
        translateX: '0vw',
        translateY: '0vw'
    });

    const animation_3 = anime.timeline({
        targets: "#measuring-solution",
        duration: 500,
        easing :'linear',
    })
    .add({
        delay: 1400,
        opacity: 0.5
    })
    .add({
        update(animation){
            document.getElementById("message").innerHTML=messages[1];
        }
    });
}

function measure_value() {

    const animation_1 = anime.timeline({
        targets: '#holding-beaker',
        duration: 500,
        easing: 'linear'
    })
    .add({
        translateX: '6vw',
        translateY: '5vw'
    });

    const animation_2 = anime.timeline({
        targets: '#holding-solution',
        duration: 500,
        easing: 'linear'
    })
    .add({
        translateX: '6vw',
        translateY: '5vw'
    });

    const animation_3 = anime.timeline({
        targets: '#cleaning-cloth',
        duration: 500,
        easing: 'linear'
    })
    .add({
        delay: 300,
        translateX: '-11vw'
    })
    .add({
        delay: 300,
        translateX: '0vw'
    });

    const animation_4 = anime.timeline({
        targets: "#measuring-beaker",
        duration: 500,
        easing: 'linear',
    })
    .add({
        delay: 1500,
        translateY: '-12vw',
        translateX: '14.6vw'
    });

    const animation_5 = anime.timeline({
        targets: "#measuring-solution",
        duration: 500,
        easing: 'linear',
    })
    .add({
        delay: 1500,
        translateY: '-12vw',
        translateX: '14.6vw'
    });

    const animation_6 = anime.timeline({
        targets: "#measuring-solution",
        duration: 2500,
        easing: 'linear',
    })
    .add({
        delay: 3500,
    })
    .add({
        update: function(animation) {
            document.getElementById("value-box").innerHTML = readings[slider_step_index].toFixed(2);
            document.getElementById("message").innerHTML=messages[2];
        }
    });
}

function clean_rod(){

    const animation_1 = anime.timeline({
        targets: "#measuring-beaker",
        duration: 500,
        easing: 'linear',
    }).add({
        translateY: '-0',
        translateX: '0'
    });

    const animation_2 = anime.timeline({
        targets: "#measuring-solution",
        duration: 500,
        easing: 'linear',
    }).add({
        translateY: '0',
        translateX: '0'
    });

    const animation_4 = anime.timeline({
        targets: '#cleaning-beaker',
        duration: 500,
        easing: 'linear'
    })
    .add({
        delay: 1600,
        translateX: '5.5vw',
        translateY: '-9vw'
    })
    .add({
        delay: 2000,
        translateX: '0',
        translateY: '0'
    });

    const animation_5 = anime.timeline({
        targets: '#distilled-water',
        duration: 500,
        easing: 'linear'
    })
    .add({
        delay: 1800,
        translateX: '-5.8vw',
        translateY: '-12vw'
    })
    .add({
        rotateZ: '40'
    })
    .add({
        delay: 500,
        rotateZ: '0',
        translateX: '0',
        translateY: '0'
    });

    const animation_6 = anime.timeline({
        targets: '#splash',
        duration: 300,
        easing: 'linear'
    })
    .add({
        delay: 2500,
        opacity: 0.9
    })
    .add({
        delay: 500,
        opacity: 0
    });

    const animation_7 = anime.timeline({
        targets: '#cleaning-solution',
        duration: 500,
        easing: 'linear'
    })
    .add({
        delay: 1600,
        translateX: '5.5vw',
        translateY: '-9vw'
    })
    .add({
        delay: 300,
        opacity: 0.5
    })
    .add({
        delay: 1200,
        translateX: '0',
        translateY: '0'
    });

    const animation_8 = anime.timeline({
        targets: '#holding-beaker',
        duration: 500,
        easing: 'linear'
    })
    .add({
        delay: 4500,
        translateX: '0',
        translateY: '0'
    });

    const animation_9 = anime.timeline({
        targets: '#holding-solution',
        duration: 500,
        easing: 'linear'
    })
    .add({
        delay: 4500,
        translateX: '0',
        translateY: '0',
        
    })
    .add({
        delay: 200,
        update: function(anim) {
            window.location.reload();
        }
    });
}
