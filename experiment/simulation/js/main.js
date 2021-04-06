//Your JavaScript goes in here
var steps = [0.040, 0.070, 0.100, 0.150, 0.300, 0.350, 0.500, 0.600, 0.800, 1.000, 1.300, 1.500, 2.000, 2.500, 3.000, 4.000];
function show_value(x)
{
 document.getElementById("slider_value").innerHTML=steps[x-1];
}

var rod_flag = 1;


$("#slider").slider({
    range: true,
    min: 0,
    max: steps.length-1,
    step: 1,
    // values: initSteps
});



function move_pouring_beaker() {
    rod_flag = 1;
    var a1 = anime.timeline({
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

    var a2 = anime.timeline({
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

    var a3 = anime.timeline({
        targets: "#measuring-solution",
        duration: 500,
        easing :'linear',
    }).add({
        delay: 1400,
        opacity: 0.5
    });
}

function measure_value() {

    var a1 = anime.timeline({
        targets: '#holding-beaker',
        duration: 500,
        easing: 'linear'
    })
    .add({
        translateX: '6vw',
        translateY: '4vw'
    });

    var a2 = anime.timeline({
        targets: '#holding-solution',
        duration: 500,
        easing: 'linear'
    })
    .add({
        translateX: '6vw',
        translateY: '4vw'
    });

    var a3 = anime.timeline({
        targets: "#measuring-beaker",
        duration: 500,
        easing: 'linear',
    }).add({
        delay: 500,
        translateY: '-12vw',
        translateX: '14.6vw'
    });

    var a4 = anime.timeline({
        targets: "#measuring-solution",
        duration: 500,
        easing: 'linear',
    }).add({
        delay: 500,
        translateY: '-12vw',
        translateX: '14.6vw'
    });
}

function clean_rod(){

    var a1 = anime.timeline({
        targets: "#measuring-beaker",
        duration: 500,
        easing: 'linear',
    }).add({
        translateY: '-0',
        translateX: '0'
    });

    var a2 = anime.timeline({
        targets: "#measuring-solution",
        duration: 500,
        easing: 'linear',
    }).add({
        translateY: '0',
        translateX: '0'
    });

    var a3 = anime.timeline({
        targets: '#cleaning-cloth',
        duration: 500,
        easing: 'linear'
    })
    .add({
        delay: 600,
        translateX: '-11vw'
    })
    .add({
        delay: 600,
        translateX: '0vw'
    });

    var a4 = anime.timeline({
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

    var a5 = anime.timeline({
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

    var a6 = anime.timeline({
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

    var a7 = anime.timeline({
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

    var a8 = anime.timeline({
        targets: '#holding-beaker',
        duration: 500,
        easing: 'linear'
    })
    .add({
        delay: 4500,
        translateX: '0',
        translateY: '0'
    });

    var a9 = anime.timeline({
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
