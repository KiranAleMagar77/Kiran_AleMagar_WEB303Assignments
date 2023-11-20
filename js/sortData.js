
var compare = {
  name: function(a, b) {
      a = a.replace(/^the /i, '');
      b = b.replace(/^the /i, '');

      if (a < b) {
          return -1;
      } else {
          return a > b ? 1 : 0;
      }
  },
  hour: function(a, b) {
      a = a.replace('h', '').replace('m', '').split(':');
      b = b.replace('h', '').replace('m', '').split(':');

      a = Number(a[0]) * 60 + Number(a[1]);
      b = Number(b[0]) * 60 + Number(b[1]);

      return a - b;
  }
};

$('#characterTable').each(function () {
  var $table = $(this);
  var $tbody = $table.find('tbody');
  var $controls = $table.find('th');
  var rows = $tbody.find('tr').toArray();

  $controls.on('click', function () {
      var $header = $(this);
      var order = $header.data('sort');
      var column;

      if ($header.is('.ascending') || $header.is('.descending')) {
          $header.toggleClass('ascending descending');
          $tbody.append(rows.reverse());
      } else {
          $header.addClass('ascending');
          $header.siblings().removeClass('ascending descending');

          if (compare.hasOwnProperty(order)) {
              column = $controls.index(this);

              rows.sort(function (a, b) {
                  a = $(a).find('td').eq(column).text();
                  b = $(b).find('td').eq(column).text();
                  return compare[order](a, b);
              });

              $tbody.empty().append(rows); // Clear the existing rows and append the sorted ones
          }
      }
  });
});
