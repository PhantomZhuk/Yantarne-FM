// setInterval(() => {
//     axios.get(`https://complex.in.ua/status-json.xsl?mount=/yantarne`)
//         .then(res => {
//             $(`#trackTitle`).text(res.data.icestats.source.title)
//         })
// }, 500);

let audio = new Audio();
let currentVol = 0.5;
let playStatus = false;
let degRotate = 0;
let timerID;
let stDiodeHgt = `0px`;
let endDiodeHgt = `120px`;

function startupScreenAnimation() {
    $(`.wrap`).hide();
    setTimeout(() => {
        $(`.startDiodes_1`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_1`).animate({ height: stDiodeHgt }, "slow")
        $(`.startDiodes_1`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_1`).animate({ height: stDiodeHgt }, "slow")
    }, 100);
    setTimeout(() => {
        $(`.startDiodes_2`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_2`).animate({ height: stDiodeHgt }, "slow")
        $(`.startDiodes_2`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_2`).animate({ height: stDiodeHgt }, "slow")
    }, 220);
    setTimeout(() => {
        $(`.startDiodes_3`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_3`).animate({ height: stDiodeHgt }, "slow")
        $(`.startDiodes_3`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_3`).animate({ height: stDiodeHgt }, "slow")
    }, 340);
    setTimeout(() => {
        $(`.startDiodes_4`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_4`).animate({ height: stDiodeHgt }, "slow")
        $(`.startDiodes_4`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_4`).animate({ height: stDiodeHgt }, "slow")
    }, 460);
    setTimeout(() => {
        $(`.startDiodes_5`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_5`).animate({ height: stDiodeHgt }, "slow")
        $(`.startDiodes_5`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_5`).animate({ height: stDiodeHgt }, "slow")
    }, 580);
    setTimeout(() => {
        $(`.startDiodes_6`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_6`).animate({ height: stDiodeHgt }, "slow")
        $(`.startDiodes_6`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_6`).animate({ height: stDiodeHgt }, "slow")
    }, 700);
    setTimeout(() => {
        $(`.startDiodes_7`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_7`).animate({ height: stDiodeHgt }, "slow")
        $(`.startDiodes_7`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_7`).animate({ height: stDiodeHgt }, "slow")
    }, 820);
    setTimeout(() => {
        $(`.startDiodes_8`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_8`).animate({ height: stDiodeHgt }, "slow")
        $(`.startDiodes_8`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_8`).animate({ height: stDiodeHgt }, "slow")
    }, 940);
    setTimeout(() => {
        $(`.startDiodes_9`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_9`).animate({ height: stDiodeHgt }, "slow")
        $(`.startDiodes_9`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_9`).animate({ height: stDiodeHgt }, "slow")
    }, 1060);
    setTimeout(() => {
        $(`.startDiodes_10`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_10`).animate({ height: stDiodeHgt }, "slow")
        $(`.startDiodes_10`).animate({ height: endDiodeHgt }, "slow")
        $(`.startDiodes_10`).animate({ height: stDiodeHgt }, "slow")
    }, 1180);
    setTimeout(() => {
        $(`.startScreen`).hide();
        $(`.wrap`).show();
    }, 3600);
}

// startupScreenAnimation();

$(`.btnPlay`).click(() => {
    axios.get(`https://complex.in.ua/status-json.xsl?mount=/yantarne`)
        .then(res => {
            if (playStatus == false) {
                audio.src = res.data.icestats.source.listenurl;
                audio.play();
                startColoPlay(playStatus);
                playStatus = true;
                $(`#playIcon`).removeClass(`fa-play`);
                $(`#playIcon`).addClass(`fa-pause`);
                rotateVinyl(degRotate);
            } else {
                $(`#playIcon`).removeClass(`fa-pause`);
                $(`#playIcon`).addClass(`fa-play`);
                audio.pause();
                startColoPlay(playStatus);
                playStatus = false;
                clearInterval(timerID);
            }
        })
})

$(`body`).keydown((e) => {
    if (e.keyCode == 32) {
        axios.get(`https://complex.in.ua/status-json.xsl?mount=/yantarne`)
            .then(res => {
                if (playStatus == false) {
                    audio.src = res.data.icestats.source.listenurl;
                    audio.play();
                    startColoPlay(playStatus);
                    playStatus = true;
                    $(`#playIcon`).removeClass(`fa-play`);
                    $(`#playIcon`).addClass(`fa-pause`);
                    rotateVinyl(degRotate);
                } else {
                    $(`#playIcon`).removeClass(`fa-pause`);
                    $(`#playIcon`).addClass(`fa-play`);
                    audio.pause();
                    startColoPlay(playStatus);
                    playStatus = false;
                    clearInterval(timerID);
                }
            })
    }
})

$(`#vol`).on(`input`, () => {
    audio.volume = $(`#vol`).val();
})

function rotateVinyl(degRotate) {
    timerID = setInterval(() => {
        degRotate++
        $(`.logo img`).css(`transform`, `rotate(${degRotate}deg)`)
    }, 100);
}

$(`.inputContainer input`).hide();
$(`#volumeControlBtn`).click(() => {
    $(`.inputContainer input`).toggle();
});

$(`.inputContainer input`).on(`input`, () => {
    if ($(`.inputContainer input`).val() == 1) {
        $(`#volCtrlIcon`).removeClass(`fa-volume-low`);
        $(`#volCtrlIcon`).addClass(`fa-volume-high`);
    } else if ($(`.inputContainer input`).val() == 0) {
        $(`#volCtrlIcon`).removeClass(`fa-volume-low`);
        $(`#volCtrlIcon`).addClass(`fa-volume-xmark`);
    } else {
        $(`#volCtrlIcon`).removeClass(`fa-volume-high`);
        $(`#volCtrlIcon`).removeClass(`fa-volume-xmark`);
        $(`#volCtrlIcon`).addClass(`fa-volume-low`);
    }
});

function startColoPlay(work) {
    if (work == false) {
        $(`#colo_1`).css(`animation`, `marginColo 1s infinite`);
        $(`#colo_2`).css(`animation`, `marginColo 1.15s infinite`);
        $(`#colo_3`).css(`animation`, `marginColo 1.3s infinite`);
        $(`#colo_4`).css(`animation`, `marginColo 1.45s infinite`);
        $(`#colo_5`).css(`animation`, `marginColo 1.6s infinite`);
    } else if (work == true) {
        $(`#colo_1`).css(`animation`, `marginColo2 1s 1`);
        $(`#colo_2`).css(`animation`, `marginColo2 1.15s 1`);
        $(`#colo_3`).css(`animation`, `marginColo2 1.3s 1`);
        $(`#colo_4`).css(`animation`, `marginColo2 1.45s 1`);
        $(`#colo_5`).css(`animation`, `marginColo2 1.6s 1`);
    }
}

let menuContainerOpen = false;
$(`.menuBtn`).click(() => {
    if (menuContainerOpen == false) {
        $(`.menuContainer`).show();
        menuContainerOpen = true;
    } else {
        $(`.menuContainer`).hide();
        menuContainerOpen = false
    }
});


let theme = localStorage.getItem('theme') || 'light';


if (theme == 'light') {
    $(`.wrap`).css(`background-color`, `#fff`);
    $(`.wrap`).css(`color`, `#000`);
    $(`.aMenu`).css(`color`, `#000`);
    $(`.themeBtn`).css(`background-color`, `#333`);
    $(`.themeBtn`).css(`color`, `#fff`);
    $(`#volumeControlBtn`).css(`background-color`, `#333`);
    $(`#volumeControlBtn`).css(`color`, `#fff`);
    $(`#colo_1`).css(`border`, `1px solid #333`);
    $(`#colo_2`).css(`border`, `1px solid #333`);
    $(`#colo_3`).css(`border`, `1px solid #333`);
    $(`#colo_4`).css(`border`, `1px solid #333`);
    $(`#colo_5`).css(`border`, `1px solid #333`);
    $(`#themeIcon`).removeClass(`fa-moon`);
    $(`#themeIcon`).addClass(`fa-sun`);
} else if (theme == `dark`) {
    $(`.wrap`).css(`background-color`, `#333`);
    $(`.wrap`).css(`color`, `#fff`);
    $(`.aMenu`).css(`color`, `#fff`);
    $(`.themeBtn`).css(`background-color`, `#fff`);
    $(`.themeBtn`).css(`color`, `#333`);
    $(`#volumeControlBtn`).css(`background-color`, `#fff`);
    $(`#volumeControlBtn`).css(`color`, `#333`);
    $(`#colo_1`).css(`border`, `1px solid #fff`);
    $(`#colo_2`).css(`border`, `1px solid #fff`);
    $(`#colo_3`).css(`border`, `1px solid #fff`);
    $(`#colo_4`).css(`border`, `1px solid #fff`);
    $(`#colo_5`).css(`border`, `1px solid #fff`);
    $(`#themeIcon`).removeClass(`fa-sun`);
    $(`#themeIcon`).addClass(`fa-moon`);
}

$(`.themeBtn`).click(() => {
    if (theme == 'light') {
        $(`.wrap`).css(`background-color`, `#333`);
        $(`.wrap`).css(`color`, `#fff`);
        $(`.aMenu`).css(`color`, `#fff`);
        $(`.themeBtn`).css(`background-color`, `#fff`);
        $(`.themeBtn`).css(`color`, `#333`);
        $(`#volumeControlBtn`).css(`background-color`, `#fff`);
        $(`#volumeControlBtn`).css(`color`, `#333`);
        $(`#colo_1`).css(`border`, `1px solid #fff`);
        $(`#colo_2`).css(`border`, `1px solid #fff`);
        $(`#colo_3`).css(`border`, `1px solid #fff`);
        $(`#colo_4`).css(`border`, `1px solid #fff`);
        $(`#colo_5`).css(`border`, `1px solid #fff`);
        $(`#themeIcon`).removeClass(`fa-sun`);
        $(`#themeIcon`).addClass(`fa-moon`);
        localStorage.setItem('theme', 'dark');
        theme = `dark`
    } else if (theme == `dark`) {
        $(`.wrap`).css(`background-color`, `#fff`);
        $(`.wrap`).css(`color`, `#000`);
        $(`.aMenu`).css(`color`, `#000`);
        $(`.themeBtn`).css(`background-color`, `#333`);
        $(`.themeBtn`).css(`color`, `#fff`);
        $(`#volumeControlBtn`).css(`background-color`, `#333`);
        $(`#volumeControlBtn`).css(`color`, `#fff`);
        $(`#colo_1`).css(`border`, `1px solid #333`);
        $(`#colo_2`).css(`border`, `1px solid #333`);
        $(`#colo_3`).css(`border`, `1px solid #333`);
        $(`#colo_4`).css(`border`, `1px solid #333`);
        $(`#colo_5`).css(`border`, `1px solid #333`);
        $(`#themeIcon`).removeClass(`fa-moon`);
        $(`#themeIcon`).addClass(`fa-sun`);
        localStorage.setItem('theme', 'light');
        theme = 'light'
    }
});