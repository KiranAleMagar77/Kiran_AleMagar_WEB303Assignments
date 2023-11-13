$(document).ready(function () {
    $.ajax({
      url: 'characters.json',
      dataType: 'json',
      success: function (data) {
        populateTable(data);
        $('#search').on('input', function () {
          searchCharacters($(this).val());
        });
        $('.filter-btn').on('click', function () {
          filterCharacters($(this).data('filter'));
        });
      },
      error: function (error) {
        console.error('Error loading data:', error);
      }
    });
  
    function populateTable(data) {
      $('#character-table tbody').empty();
      $.each(data, function (index, character) {
        $('#character-table tbody').append('<tr><td>' + character.firstName + '</td><td>' + character.lastName + '</td><td>' + character.age+ '</td><td>'
          +character.superHeroName  + '</td><td>' + character.power + '</td></tr>');
      });
      updateFilterCounts();
    }
  
    function searchCharacters(searchTerm) {
      $('#character-table tbody tr').each(function () {
        var firstName = $(this).find('td:first-child').text();
        if (firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
          $(this).addClass('highlight');
        } else {
          $(this).removeClass('highlight');
        }
      });
    }
  
    function filterCharacters(filter) {
      $('#character-table tbody tr').each(function () {
        var lastName = $(this).find('td:nth-child(2)').text();
        var showRow = (filter === 'A-M' && lastName.toUpperCase().charCodeAt(0) >= 65 && lastName.toUpperCase().charCodeAt(0) <= 77) ||
                      (filter === 'N-Z' && lastName.toUpperCase().charCodeAt(0) >= 78 && lastName.toUpperCase().charCodeAt(0) <= 90);
        $(this).toggle(showRow);
      });
      updateFilterCounts();
    }
  
    function updateFilterCounts() {
      $('.filter-btn').each(function () {
        var filter = $(this).data('filter');
        var count = $('#character-table tbody tr:visible').filter(function () {
          var lastName = $(this).find('td:nth-child(2)').text();
          return (filter === 'A-M' && lastName.toUpperCase().charCodeAt(0) >= 65 && lastName.toUpperCase().charCodeAt(0) <= 77) ||
                 (filter === 'N-Z' && lastName.toUpperCase().charCodeAt(0) >= 78 && lastName.toUpperCase().charCodeAt(0) <= 90);
        }).length;
        $(this).find('span').text(count);
      });
    }
  });
  