$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        e.preventDefault();
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });

        // Open the modal
        var modal = $('#myModal');
        var modalImg = $('#modal-image');
        modal.css('display', 'block');
        modalImg.html($content);

        // Close the modal when the close button is clicked
        var closeBtn = $('.close');
        closeBtn.on('click', function () {
            modal.css('display', 'none');
        });
    });
});
