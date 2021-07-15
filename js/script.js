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

/*
$(document).ready(function() {
    gallery_img_height();
});
$( window ).resize(function() {
    gallery_img_height();
});
 */