$(document).ready(function () {
    // Accordion
    $(".accordion-control").click(function () {
      $(this)
        .next(".accordion-panel")
        .not(":animated")
        .slideToggle();
      $(".accordion-panel")
        .not($(this).next(".accordion-panel"))
        .slideUp();
    });
  
    // Tabs
    $(".tab-control").click(function (e) {
      e.preventDefault();
      var id = $(this).attr("href");
      $(".tab-panel").removeClass("active");
      $(id).addClass("active");
      $(".tab-list li").removeClass("active");
      $(this).parent().addClass("active");
    });
  });
  