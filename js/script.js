function f_search_box() {
    var t = $('.jk-btn-search');
    if(t.hasClass('on')) {
        t.removeClass('on');
        $('#search-box').slideUp();
    } else {
        t.addClass('on');
        $('#search-box').slideDown();
    }
}


$(document).ready(function() {
    f_list_img_height();
});
$( window ).resize(function() {
    f_list_img_height();
});

function f_list_img_height() {
    var w = $('.jk-list-image').width();
    $('.jk-list-image').height(w);
}

function f_about_input(v) {
    if(event.keyCode==13) {
        $('.jk-input-box').before('<span>'+v+'</span>');
        $('.jk-input-box').before('<strong class="text-muted">Sorry. No Data.</strong>');
        $('.jk-input-box input').val('');
    }
}

/* music */
var music_player = null;
var music_currentTime = 0;
var music_duration = 0;
var music_progressbar = 0;
var music_percent = 0;
function f_play_btn(t) {
    if($(t).hasClass('pause')) {
        // 일시정지
        music_player.pause();
        $(t).removeClass('pause');
        $(t).html(
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n'+
            '  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>\n'+
            '</svg>'
        );
    } else {
        // 재생
        music_player.play();
        $(t).addClass('pause');
        $(t).html(
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n' +
            '  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>\n' +
            '</svg>'
        );
    }
}

function f_sound_btn(t) {
    if($(t).hasClass('mute')) {
        // 음소거
        music_player.muted = false;
        $(t).removeClass('mute');
        $(t).html(
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">\n' +
            '  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>\n' +
            '  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>\n' +
            '  <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>\n' +
            '</svg>'
        );
    } else {
        // 활성화
        music_player.muted = true;
        $(t).addClass('mute');
        $(t).html(
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">\n' +
            '  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>\n' +
            '</svg>'
        );
    }
}

function f_music_information(t) {
    var p = $(t).closest('.jk-music-information-box');
    if(p.hasClass('on')) {
        // 숨기는 중
        $('.jk-music-information').stop().slideUp();
        p.removeClass('on');
    } else {
        // 보여주는 중
        $('.jk-music-information').stop().slideDown();
        p.addClass('on');
    }
}

var music_lyrics_point_ori = -1;
var music_lyrics_point = 0;
var music_lyrics_point_temp = null;
var music_lyrics = null;
var music_lyrics_time = [];
var music_lyrics_scroll = false;
function f_music_sync() {
    music_lyrics_point_temp = music_lyrics_time.filter(function(item) {
        return music_player.currentTime > item;
    });
    music_lyrics_point = music_lyrics_point_temp.length-1;
    if(music_lyrics_point_ori != music_lyrics_point) {
        music_lyrics.removeClass('on');
        music_lyrics.eq(music_lyrics_point).addClass('on');
        music_lyrics_point_ori = music_lyrics_point;
        f_music_align();
    }
}
function f_music_align() {
    var a = $('.jk-music-lyrics p.on').height();
    var c = $("main").height();
    var d = $('.jk-music-lyrics p.on').offset().top - $('.jk-music-lyrics p.on').parent().offset().top;
    var e = d + (a/2) - (c/2);
    var chk = $(window).height()<$('.jk-music-lyrics p.on').offset().top || $('.jk-music-lyrics p.on').offset().top<0 || !music_lyrics_scroll;
    if(chk) {
        $("main").stop().animate(
            {scrollTop: e + "px"}, {easing: "swing", duration: 250}
        );
    }
}

$(document).ready(function() {
    music_player = document.getElementById('jk-music-player');
    music_player.addEventListener("timeupdate", function() {
        music_currentTime = music_player.currentTime;
        music_duration = music_player.duration;
        music_progressbar = (music_currentTime + 0.25) / music_duration * 100;
        $('.jk-music-progress-bar').val(music_progressbar);
        f_music_sync();
        // $('.hp_range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
    });

    $('.jk-music-progress-bar').on('click', function(e) {
        music_percent = e.offsetX / this.offsetWidth;
        music_player.currentTime = music_percent * music_player.duration;
        music_currentTime = music_player.currentTime;
        music_player.value = music_percent / 100;
    });

    music_lyrics = $('.jk-music-lyrics p');
    music_lyrics.each(function() {
        music_lyrics_time.push($(this).data('time'));
    });

    $('main').scroll(function () {
        music_lyrics_scroll = true;
        setTimeout(function() {
           music_lyrics_scroll = false;
        }, 5000);
    });

    music_lyrics.on('click', function() {
       music_currentTime = $(this).data('time');
        music_player.currentTime = music_currentTime+0.01;
    });
});

// 가사 싱크 위함
var temp_i = 0;
$(window).on('keydown', function(e) {
    if(e.keyCode==16) {
        // $('.jk-music-lyrics p').eq(temp_i++).attr('data-time', music_currentTime);
        console.log(music_currentTime.toFixed(2)); // 현재 재생 시간
    } else if(e.keyCode==17) {
        temp_i--;
    } else {
        console.log(e.keyCode);
    }
});