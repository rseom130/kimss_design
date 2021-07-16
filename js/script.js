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

function f_play_btn(t) {
    if($(t).hasClass('pause')) {
        $(t).removeClass('pause');
        $(t).html(
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n'+
            '  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>\n'+
            '</svg>'
        );
        youtube_player.pauseVideo();
    } else {
        $(t).addClass('pause');
        $(t).html(
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n' +
            '  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>\n' +
            '</svg>'
        );
        youtube_player.playVideo();
    }
}

function f_sound_btn(t) {
    if($(t).hasClass('mute')) {
        $(t).removeClass('mute');
        $(t).html(
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">\n' +
            '  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>\n' +
            '  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>\n' +
            '  <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>\n' +
            '</svg>'
        );
        youtube_player.unMute();
    } else {
        $(t).addClass('mute');
        $(t).html(
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">\n' +
            '  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>\n' +
            '</svg>'
        );
        youtube_player.mute();
    }
}
