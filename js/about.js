function f_about_input(v) {
    if(event.keyCode==13) {
        $('.jk-input-box').before('<span>'+v+'</span>');
        $('.jk-input-box').before('<strong class="text-muted">Sorry. No Data.</strong>');
        $('.jk-input-box input').val('');
    }
}