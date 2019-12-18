$(function(){
    $('.review__item').on('click', function(){
        var reviewContent = $('#reviewModal'+$(this).index());
        lightboxShow(reviewContent);
    });
});