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
let timerID ;

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
        $(`.logo`).css(`transform`, `rotate(${degRotate}deg)`)
    }, 100);
}