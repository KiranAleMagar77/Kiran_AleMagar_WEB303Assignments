// (function ($) {
//     $.fn.customPhotoViewer = function () {
//         return this.each(function () {
//             var $photoViewer = $(this);
//             var $thumbnails = $photoViewer.find('.thumbnail-anchor');
//             var $photoBox = $photoViewer.find('.photo-box');
//             var $mainImage = $photoBox.find('img');

//             $thumbnails.on('click', function (e) {
//                 e.preventDefault();
//                 $thumbnails.removeClass('active');
//                 $(this).addClass('active');

//                 var fullSizeImageSrc = $(this).attr('href');
//                 $mainImage.attr('src', fullSizeImageSrc);
//             });
//         });
//     };
// })(jQuery);

// 

$.fn.customPhotoViewer = function () {
    var $photoViewer = this;
    var $photoBox = $photoViewer.find('.photo-box');
    var $thumbnails = $photoViewer.find('.thumbnail-anchor');
  
    $thumbnails.on('click', function (e) {
      e.preventDefault();
      var $thumbnail = $(this);
      var $thumbnailImg = $thumbnail.find('img');
      var $thumbnailHref = $thumbnail.attr('href');
  
      $photoBox.removeClass('is-loading');
      $photoBox.css('background-image', 'url(' + $thumbnailHref + ')');
      $thumbnails.removeClass('active');
      $thumbnail.addClass('active');
    });
  
    return this;
  };
