$(document).ready(function() {


var $tableBody = $('<tbody></tbody>');

$.getJSON("array.json").done((data) => {
    // jQuery.each of the players in the array
    $.each(data.characters, function (key, val) {
  //      console.log("data key: ", key, " and data value: ", val);

        var $row = $(`<tr class="${key}"></tr>`); // Create their row
        // populate data
        $row.append($('<td></td>').text(val.firstname));
        $row.append($('<td></td>').text(val.lastname));
        $row.append($('<td></td>').text(val.moviename));
        $row.append($('<td></td>').text(val.date));
        $row.append($('<td></td>').text(val.charactername));
        $row.append($('<td></td>').text(val.genre));

        $tableBody.append($row); // Add row to the tbody

    });
    $('thead').after($tableBody);
    init();
});



var compare = {
    name: function (a, b) {
        console.log("processing the words", b, ", ", a);
        if (a < b) {
            return -1;
        }
        else if (b < a) {
            return 1
        }
        else //they're equal
        {
            return 0;
        }
    },
    compareNumbersAscending: function (a, b) {
        // b is the first value being compared, a is the second
        console.log("processing the numbers", b, ", ", a);
        return parseInt(a) - parseInt(b);
    },
    compareNumbersDescending: function (a, b) {
        // b is the first value being compared, a is the second
        console.log("processing the numbers", b, ", ", a);
        return b - a;
    },
    compareNumbersRandom: function (a, b) {
        return 0.5 - Math.random(); // Math.random() returns a value between 0 and 1
    },
    compareDates: function (a, b) {
        var dateA = new Date(a);
        var dateB = new Date(b);
        return dateA - dateB;
    }
};




function init() { // this is essentially the jquery ready function now
    $('#data-table').each(function () {
        var $table = $(this);
        // This table
        var $tbody = $table.find('tbody'); // Table body
        var $controls = $table.find('th'); // Table headers
        var rows = $tbody.find('tr').toArray(); 
        $controls.on('click', function () { // Event handler
            var $header = $(this); // Get header
            var order = $header.data('sortbythis'); // either name or compareNumbersAscending
            var column; // Used later
                if ($header.is('.ascending')){
                    console.log('hello');
                    $header.removeClass('ascending');
                    $header.addClass('descending');
                    $tbody.append(rows.reverse());
            }
              else
                if ($header.is('.descending')){
                    $header.removeClass('descending');
                    rows.sort(function (a, b) { // Call sort() on rows
                        a = $(a).attr('class');// Text of column row a
                        b = $(b).attr('class');// Text of column row b
                        return compare[order](a, b); // Call compare method
                    });
                    $tbody.append(rows);
                    

                   
                }
                else{
                    $header.removeClass('descending');
                    $header.addClass('ascending'); // Add class to header
                    // Remove asc or desc from all other headers
                    $header.siblings().removeClass('ascending descending'); // If compare object has method of that name
                    console.log("check if has property");
                    if (compare.hasOwnProperty(order)) {
                        console.log("has property");
                        column = $controls.index(this); // Column's index no
                        rows.sort(function (a, b) { // Call sort() on rows
                            a = $(a).find('td').eq(column).text();// Text of column row a
                            b = $(b).find('td').eq(column).text();// Text of column row b
                            return compare[order](a, b); // Call compare method
                        });
                        $tbody.append(rows);
                    }


            } 
        });
    });

}


});








