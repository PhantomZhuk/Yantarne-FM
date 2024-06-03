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

$(`.btnPlay`).click(() => {
    axios.get(`https://complex.in.ua/status-json.xsl?mount=/yantarne`)
        .then(res => {
            if (playStatus == false) {
                audio.src = res.data.icestats.source.listenurl;
                audio.play();
                playStatus = true;
                $(`#playIcon`).removeClass(`fa-play`);
                $(`#playIcon`).addClass(`fa-pause`);
                rotateVinyl(degRotate);
            } else {
                $(`#playIcon`).removeClass(`fa-pause`);
                $(`#playIcon`).addClass(`fa-play`);
                audio.pause();
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
                    playStatus = true;
                    $(`#playIcon`).removeClass(`fa-play`);
                    $(`#playIcon`).addClass(`fa-pause`);
                    rotateVinyl(degRotate);
                } else {
                    $(`#playIcon`).removeClass(`fa-pause`);
                    $(`#playIcon`).addClass(`fa-play`);
                    audio.pause();
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

//

let stDiodeHgt = `0px`;
let endDiodeHgt = `120px`;

function startupScreenAnimation(){
    setTimeout(() => {
        $(`.startDiodes_1`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_1`).animate({height: stDiodeHgt}, "slow")
        $(`.startDiodes_1`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_1`).animate({height: stDiodeHgt}, "slow")
    }, 100);
    setTimeout(() => {
        $(`.startDiodes_2`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_2`).animate({height: stDiodeHgt}, "slow")
        $(`.startDiodes_2`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_2`).animate({height: stDiodeHgt}, "slow")
    }, 220);
    setTimeout(() => {
        $(`.startDiodes_3`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_3`).animate({height: stDiodeHgt}, "slow")
        $(`.startDiodes_3`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_3`).animate({height: stDiodeHgt}, "slow")
    }, 340);
    setTimeout(() => {
        $(`.startDiodes_4`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_4`).animate({height: stDiodeHgt}, "slow")
        $(`.startDiodes_4`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_4`).animate({height: stDiodeHgt}, "slow")
    }, 460);
    setTimeout(() => {
        $(`.startDiodes_5`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_5`).animate({height: stDiodeHgt}, "slow")
        $(`.startDiodes_5`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_5`).animate({height: stDiodeHgt}, "slow")
    }, 580);
    setTimeout(() => {
        $(`.startDiodes_6`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_6`).animate({height: stDiodeHgt}, "slow")
        $(`.startDiodes_6`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_6`).animate({height: stDiodeHgt}, "slow")
    }, 700);
    setTimeout(() => {
        $(`.startDiodes_7`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_7`).animate({height: stDiodeHgt}, "slow")
        $(`.startDiodes_7`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_7`).animate({height: stDiodeHgt}, "slow")
    }, 820);
    setTimeout(() => {
        $(`.startDiodes_8`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_8`).animate({height: stDiodeHgt}, "slow")
        $(`.startDiodes_8`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_8`).animate({height: stDiodeHgt}, "slow")
    }, 940);
    setTimeout(() => {
        $(`.startDiodes_9`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_9`).animate({height: stDiodeHgt}, "slow")
        $(`.startDiodes_9`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_9`).animate({height: stDiodeHgt}, "slow")
    }, 1060);
    setTimeout(() => {
        $(`.startDiodes_10`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_10`).animate({height: stDiodeHgt}, "slow")
        $(`.startDiodes_10`).animate({height: endDiodeHgt}, "slow")
        $(`.startDiodes_10`).animate({height: stDiodeHgt}, "slow")
    }, 1180);    
    setTimeout(() => {
        $(`.startScreen`).hide();
    }, 3600);
}

startupScreenAnimation()