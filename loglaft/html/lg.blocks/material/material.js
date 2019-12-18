$(function() {
    var activeMaterial;
    $('.material__slide').hide();
    $('.material__slide_first').show();
    function showMaterial(indexMaterial) {
        $('.material__slide').hide();
        $('.material__slide').eq(indexMaterial).show();
    }
    $('.material__filteritem').on('click', function() {
        activeMaterial = $(this).index();
        showMaterial(activeMaterial);
        $('.material__filteritem').removeClass('material__filteritem_active');
        $(this).addClass('material__filteritem_active');
        $('.material__pageritem').removeClass('material__pageritem_active');
        $('.material__pageritem').eq(activeMaterial).addClass('material__pageritem_active');
    });
    $('.material__pageritem').on('click', function() {
        activeMaterial = $(this).index();
        showMaterial(activeMaterial);
        $('.material__pageritem').removeClass('material__pageritem_active');
        $(this).addClass('material__pageritem_active');
        $('.material__filteritem').removeClass('material__filteritem_active');
        $('.material__filteritem').eq(activeMaterial).addClass('material__filteritem_active');
    });
})