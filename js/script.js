//Assignmnet3 
//Author: Kiran Ale Magar

function getTeamDataWithGetJSON() {
    $.getJSON("team.json", function(data) {
      
      $.each(data.members, function(index, member) {
        $("#team").append(
          "<h2>" + member.name + "</h2>" +
          "<h5>" + member.position + "</h5>" +
          "<p>" + member.bio + "</p>"
        );
      });
    });
  }
  
  function getTeamDataWithAjax() {
    $("#team").html("Loading...");
  
    $.ajax({
      url: "team.json",
      method: "GET",
      dataType: "json",
      beforeSend: function() {
        console.log("Before sending the request...");
      },
      success: function(data) {
        setTimeout(function() {
          $("#team").empty();
          $.each(data.members, function(index, member) {
            $("#team").append(
              "<h2>" + member.name + "</h2>" +
              "<h5>" + member.position + "</h5>" +
              "<p>" + member.bio + "</p>"
            );
          });
        }, 3000); // Delay for 3 seconds
      },
      error: function() {
        $("#team").html("Error: Content could not be retrieved.");
      }
    });
  }
  
  $(document).ready(function() {
    getTeamDataWithAjax(); 
  });
  