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
    } else {
        $(t).addClass('pause');
        $(t).html(
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n' +
            '  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>\n' +
            '</svg>'
        );
    }
}
