//Assignment2

$(document).ready(function () {
    // Function to load content via AJAX and animate
    function loadContent(page) {
        $.ajax({
            url: page + ".html",
            dataType: "html",
            success: function (data) {
                // Fade out the content
                $("#content").fadeOut("fast", function () {
                    // Replace the content with loaded data
                    $("#content").html(data);
                    // Fade in the content
                    $("#content").fadeIn('fast');
                });
            },
            error: function () {
                $("#content").html("Error loading content.");
            },
        });
    }

    // Click event handlers for the links
    $("#prospect").click(function (e) {
        e.preventDefault();
        loadContent("prospect");
    });

    $("#convert").click(function (e) {
        e.preventDefault();
        loadContent("convert"); // Corrected function name
    });

    $("#retain").click(function (e) {
        e.preventDefault();
        loadContent("retain");
    });

    loadContent("prospect");
});