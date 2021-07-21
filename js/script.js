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