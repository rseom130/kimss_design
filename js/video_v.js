var custom_width = 16;
var custom_height = 9;
$(document).ready(function() {
    f_video_height();
});
$( window ).resize(function() {
    f_video_height();
});

function f_video_height(w=custom_width, h=custom_height) {
    var iframe_width = $('main iframe').width();
    $('main iframe').height((iframe_width / w) * h);
    custom_width = w;
    custom_height = h;
}