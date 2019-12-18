$(function(){
    $('.other__button').on('click', function(){
        var otherContent = $('#modalform');
        lightboxShow(otherContent);
    });
    $('input[name="form-check"]').val('sovadom.ru');
});