if ($.cookie(`openCookiePopup`) === undefined) {
    $.cookie(`openCookiePopup`, `true`);
}

if ($.cookie(`agreedCookies`) === undefined) {
    $.cookie(`agreedCookies`, `false`);
}

let openCookiePopup = $.cookie(`openCookiePopup`);

if (openCookiePopup == `true`) {
    $(`.cookiePopup`).css(`display`, `flex`);
} else if (openCookiePopup == `false`) {
    $(`.cookiePopup`).css(`display`, `none`);
}

$(`.cookieAgreed, .cookieRefuse`).click(() => {
    if (openCookiePopup == `true`) {
        $(`.cookiePopup`).css(`display`, `none`);
        $.cookie(`openCookiePopup`, `false`)
    }
});

$(`.cookieAgreed`).click(() => {
    $.cookie(`agreedCookies`, `true`)
});

$(`.cookieRefuse`).click(() => {
    $.cookie(`agreedCookies`, `false`)
});

setInterval(() => {
    axios.get(`https://complex.in.ua/status-json.xsl?mount=/yantarne`)
        .then(res => {
            $(`#trackTitle`).text(res.data.icestats.source.title)
        })
}, 500);

let audio = new Audio();
let currentVol = 0.5;
let playStatus = false;
let degRotate = 0;
let timerID;
let stDiodeHgt = `0px`;
let endDiodeHgt = `120px`;

function startupScreenAnimation() {
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
    }, 3600);
}

startupScreenAnimation();

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
        $(`.timetablePage`).hide();
        $(`.teamPage`).hide();
        $(`.partnersPage`).hide();
        $(`footer`).hide();
        menuContainerOpen = true;
    } else {
        $(`.menuContainer`).hide();
        $(`.timetablePage`).show();
        $(`.teamPage`).show();
        $(`.partnersPage`).show();
        $(`footer`).show();
        menuContainerOpen = false
    }
});

let themeContainerOpen = false;

$(`.themeBtn`).click(() => {
    if (themeContainerOpen == false) {
        $(`.themesContainer`).css(`right`, `10px`)
        themeContainerOpen = true;
    } else {
        $(`.themesContainer`).css(`right`, `-200px`)
        themeContainerOpen = false
    }
})

$(`.liMenu`).click(() => {
    $(`.menuContainer`).hide();
    $(`.timetablePage`).show();
    $(`.teamPage`).show();
    $(`.partnersPage`).show();
    $(`footer`).show();
    menuContainerOpen = false
});

let greenBackgroundColor = `#1b8b1b`;
let greenColor = `#27bf27`;
let greenDarkColor = `#115711`;

let redBackgroundColor = '#eb3838'
let redColor = `#ff3b3b`;
let redDarkColor = `#b72b2b`;


let orangeBackgroundColor = '#ff7518'
let orangeColor = `#ff8418`;
let orangeDarkColor = `#b25110`;

let blueBackgroundColor = '#4322ed'
let blueColor = `#5522ff`;
let blueDarkColor = `#341aba`;

let darkColor = `#333`;
let lightColor = `#fff`;

if ($.cookie(`theme`) === undefined) {
    $.cookie(`theme`, `light`);
}

let theme = $.cookie(`theme`);

function topicVerification() {
    if (theme == 'light') {
    } else if (theme == 'green') {
        $('.homePage').css('background-image', 'url(./img/greenThemeFon.jpg)');
        $('.startDiodes').css('background-color', greenColor);
        $('.startDiodes').css('box-shadow', '0.1px 3px 10px #1b8b1b');
        $('.homeHeader').css('background-color', 'rgba(39, 191, 39, 0.1)');
        $('.homeHeader').css('color', '#fff');
        $('.themeBtn').css('background-color', greenBackgroundColor);
        $('.menuBtn').css('background-color', greenBackgroundColor);
        $('.btnPlay').css('background-color', greenBackgroundColor);
        $('#volumeControlBtn').css('background-color', greenBackgroundColor);
        $('.circleDotBlock i').css('color', greenDarkColor);
        $('.ttTextBlock h3').css('color', greenDarkColor);
        $('.teamTxtBlock a').css('color', greenColor);
        $('.navBlocks a').hover(function () {
            $(this).css('color', greenColor);
        }, function () {
            $(this).css('color', '');
        });

        $('.contactBlocks a').hover(function () {
            $(this).css('color', greenColor);
        }, function () {
            $(this).css('color', '');
        });

        $('.mesengersContainer a').hover(function () {
            $(this).css('color', '');
            $(this).css('background-color', greenDarkColor);
        }, function () {
            $(this).css('color', '');
            $(this).css('background-color', '');
        });
    } else if (theme == 'red') {
        $('.homePage').css('background-image', 'url(./img/redThemeFon.jpg)');
        $('.startDiodes').css('background-color', redColor);
        $('.startDiodes').css('box-shadow', '0.1px 3px 10px' + redBackgroundColor);
        $('.homeHeader').css('background-color', 'rgba(51, 51, 51, 0.3)');
        $('.homeHeader').css('color', '#fff');
        $('.themeBtn').css('background-color', redBackgroundColor);
        $('.menuBtn').css('background-color', redBackgroundColor);
        $('.btnPlay').css('background-color', redBackgroundColor);
        $('#volumeControlBtn').css('background-color', redBackgroundColor);
        $('.circleDotBlock i').css('color', redDarkColor);
        $('.ttTextBlock h3').css('color', redDarkColor);
        $('.teamTxtBlock a').css('color', redColor);
        $('.navBlocks a').hover(function () {
            $(this).css('color', redColor);
        }, function () {
            $(this).css('color', '');
        });

        $('.contactBlocks a').hover(function () {
            $(this).css('color', redColor);
        }, function () {
            $(this).css('color', '');
        });

        $('.mesengersContainer a').hover(function () {
            $(this).css('color', '');
            $(this).css('background-color', redDarkColor);
        }, function () {
            $(this).css('color', '');
            $(this).css('background-color', '');
        });
    } else if (theme == 'orange') {
        $('.homePage').css('background-image', 'url(./img/orangeThemeFon.jpg)');
        $('.startDiodes').css('background-color', orangeColor);
        $('.startDiodes').css('box-shadow', '0.1px 3px 10px' + orangeBackgroundColor);
        $('.homeHeader').css('background-color', 'rgba(51, 51, 51, 0.3)');
        $('.homeHeader').css('color', '#fff');
        $('.themeBtn').css('background-color', orangeBackgroundColor);
        $('.menuBtn').css('background-color', orangeBackgroundColor);
        $('.btnPlay').css('background-color', orangeBackgroundColor);
        $('#volumeControlBtn').css('background-color', orangeBackgroundColor);
        $('.circleDotBlock i').css('color', orangeDarkColor);
        $('.ttTextBlock h3').css('color', orangeDarkColor);
        $('.teamTxtBlock a').css('color', orangeColor);
        $('.navBlocks a').hover(function () {
            $(this).css('color', orangeColor);
        }, function () {
            $(this).css('color', '');
        });

        $('.contactBlocks a').hover(function () {
            $(this).css('color', orangeColor);
        }, function () {
            $(this).css('color', '');
        });

        $('.mesengersContainer a').hover(function () {
            $(this).css('color', '');
            $(this).css('background-color', orangeDarkColor);
        }, function () {
            $(this).css('color', '');
            $(this).css('background-color', '');
        });
    } else if (theme == 'blue') {
        $('.homePage').css('background-image', 'url(./img/blueThemeFon.jpg)');
        $('.startDiodes').css('background-color', blueColor);
        $('.startDiodes').css('box-shadow', '0.1px 3px 10px' + blueBackgroundColor);
        $('.homeHeader').css('background-color', 'rgba(51, 51, 51, 0.3)');
        $('.homeHeader').css('color', '#fff');
        $('.themeBtn').css('background-color', blueBackgroundColor);
        $('.menuBtn').css('background-color', blueBackgroundColor);
        $('.btnPlay').css('background-color', blueBackgroundColor);
        $('#volumeControlBtn').css('background-color', blueBackgroundColor);
        $('.circleDotBlock i').css('color', blueDarkColor);
        $('.ttTextBlock h3').css('color', blueDarkColor);
        $('.teamTxtBlock a').css('color', blueColor);
        $('.navBlocks a').hover(function () {
            $(this).css('color', blueColor);
        }, function () {
            $(this).css('color', '');
        });

        $('.contactBlocks a').hover(function () {
            $(this).css('color', blueColor);
        }, function () {
            $(this).css('color', '');
        });

        $('.mesengersContainer a').hover(function () {
            $(this).css('color', '');
            $(this).css('background-color', blueDarkColor);
        }, function () {
            $(this).css('color', '');
            $(this).css('background-color', '');
        });
    } else if (theme == 'dark') {
        $('.homePage').css('background-image', 'url(./img/themeFon.jpg)');
        $('.wrap').css('background-color', darkColor);
        $('.wrap').css('color', lightColor);
        $('.aMenu').css('color', lightColor);
        $('.teamTxtBlock a').css('color', lightColor);
        $('.ttTextBlock h3').css('color', lightColor);
        $('.themeBtn').css('background-color', lightColor);
        $('.themeBtn').css('color', darkColor);
        $('#volumeControlBtn').css('background-color', lightColor);
        $('#volumeControlBtn').css('color', darkColor);
        $('.menuBtn').css('background-color', lightColor);
        $('.menuBtn').css('color', darkColor);
        $('#colo_1').css('border', '2px solid ' + lightColor);
        $('#colo_2').css('border', '2px solid ' + lightColor);
        $('#colo_3').css('border', '2px solid ' + lightColor);
        $('#colo_4').css('border', '2px solid ' + lightColor);
        $('#colo_5').css('border', '2px solid ' + lightColor);
        $('.ttBlock').css('box-shadow', '0 1px 5px ' + lightColor);
        $('.teamBlock').css('box-shadow', '0 1px 5px ' + lightColor);
    }
}

function setTheme(theme) {
    $.cookie('theme', theme);
    topicVerification();
    location.reload()
}

$(document).ready(function() {
    topicVerification();

    $('#light').click(function() {
        setTheme('light');
    });

    $('#green').click(function() {
        setTheme('green');
    });

    $('#red').click(function() {
        setTheme('red');
    });

    $('#orange').click(function() {
        setTheme('orange');
    });

    $('#blue').click(function() {
        setTheme('blue');
    });

    $('#dark').click(function() {
        setTheme('dark');
    });
});
