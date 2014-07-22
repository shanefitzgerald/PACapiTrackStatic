$( document ).ready(function() {
    console.log( "ready!" );
    $.ajax({
        url: "http://api.nytimes.com/svc/elections/us/v3/finances/2014/candidates/leaders/pac-total.json?api-key=c353cbc0ae7d858a504f6ed663c0a326:5:69483126",
        //force to handle it as jsonp by adding 'callback='
        dataType: "jsonp",
        success: function(data1) {                   
                for (var key in data1.results) {
                    $('#pactotal').append('<tr id="' + data1.results[key].party + '">' +
                                                '<td>' + data1.results[key].name  + '</td>' + 
                                                '<td>' + data1.results[key].party + '</td>' +
                                                '<td>' + data1.results[key].total_from_pacs + '</td>' +
                                                '<td>' + data1.results[key].date_coverage_from + '</td>' +
                                                '<td>' + data1.results[key].date_coverage_to + '</td>' +
                                            '</tr>'
                                            )};
                                }
            })
});