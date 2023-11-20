
(function() {
    var $characterRows = $('#characterTable tbody tr');
    var $searchInput = $('#searchInput input');

    function applySearchFilter() {
        var query = $searchInput.val().toLowerCase();

        $characterRows.each(function() {
            var firstName = $(this).find('td:first-child').text().toLowerCase();
            var isMatch = firstName.includes(query);

            $(this).toggle(isMatch);
        });
    }

    $searchInput.on('input', applySearchFilter);

    // Filter Buttons
    $('#AM').on('click', function() {
        $characterRows.each(function() {
            var lastName = $(this).find('td:nth-child(2)').text();
            var isInRange = /^[A-Ma-m]/.test(lastName);
            $(this).toggle(isInRange);
        });
    });

    $('#NZ').on('click', function() {
        $characterRows.each(function() {
            var lastName = $(this).find('td:nth-child(2)').text();
            var isInRange = /^[N-Zn-z]/.test(lastName);
            $(this).toggle(isInRange);
        });
    });

    // Initialize table sorting
    $('#characterTable').each(function() {
        var $table = $(this);
        var $controls = $table.find('th');

        $controls.on('click', function() {
            $controls.removeClass('ascending descending');

            var order;
            if ($(this).hasClass('ascending')) {
                order = 'descending';
                $(this).removeClass('ascending descending');
            } else {
                order = 'ascending';
                $controls.removeClass('ascending descending');
                $(this).addClass(order);
            }

            var column = $(this).index(); // Get the column index of the clicked header
            sortTable($table, order, column);
        });
    });
})();

function sortTable($table, order, column) {
    var $tbody = $table.find('tbody');
    var rows = $tbody.find('tr').toArray();

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
        // Add other comparison methods if needed
    };

    rows.sort(function(a, b) {
        a = $(a).find('td').eq(column).text();
        b = $(b).find('td').eq(column).text();

        return compare['name'](a, b);
    });

    if (order === 'descending') {
        rows.reverse();
    }

    $tbody.empty().append(rows);
}
