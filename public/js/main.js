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
    $.ajax({
        url: "http://api.nytimes.com/svc/elections/us/v3/finances/2014/candidates/leaders/receipts-total.json?api-key=c353cbc0ae7d858a504f6ed663c0a326:5:69483126",
        //force to handle it as jsonp by adding 'callback='
        dataType: "jsonp",
        success: function(data) {                   
                for (var key in data.results) {
                    $('#twentytotal').append('<tr id="' + data.results[key].party + '">' +
                                                '<td>' + data.results[key].name  + '</td>' + 
                                                '<td>' + data.results[key].party + '</td>' +
                                                '<td>' + data.results[key].total_contributions + '</td>' +
                                                '<td>' + data.results[key].date_coverage_from + '</td>' +
                                                '<td>' + data.results[key].date_coverage_to + '</td>' +
                                            '</tr>'
                                            )};
                                }
            })
    $.ajax({
        url: "http://api.nytimes.com/svc/elections/us/v3/finances/2014/candidates/leaders/individual-total.json?api-key=c353cbc0ae7d858a504f6ed663c0a326:5:69483126",
        //force to handle it as jsonp by adding 'callback='
        dataType: "jsonp",
        success: function(data) {                   
                for (var key in data.results) {
                    $('#twentyindividualtotal').append('<tr id="' + data.results[key].party + '">' +
                                                '<td>' + data.results[key].name  + '</td>' + 
                                                '<td>' + data.results[key].party + '</td>' +
                                                '<td>' + data.results[key].total_from_individuals + '</td>' +
                                                '<td>' + data.results[key].date_coverage_from + '</td>' +
                                                '<td>' + data.results[key].date_coverage_to + '</td>' +
                                            '</tr>'
                                            )};
                                }
            })
    $.ajax({
            // make API call to nytimes to get most recently added commities
            url: "http://api.nytimes.com/svc/elections/us/v3/finances/2014/committees/new.json?api-key=c353cbc0ae7d858a504f6ed663c0a326:5:69483126",
            dataType: 'jsonp',
            success: function(data) {
                for (var key in data.results) {
                    if (data.results != null) {
                        // From the json display the name, treasure name, state and link to fec
                        $('#twentyNewestPacsContainer').append (
                            '<div class="pacs"><h5 id="' + data.results[key].id + '">' + data.results[key].name  + '</h5>' + 
                            '<p>Treasure: ' + data.results[key].treasurer +    '</p>' +
                            '<p>State: ' + data.results[key].state + '</p>' +
                            '<p><a href="'  + data.results[key].fec_uri + '">FEC Link</a></p>' +
                            '</div>'
                        )
                    }
                };
            }
        })
    $.ajax({
            // make API call to nytimes to get most recent SUPER PACS
            url: "http://api.nytimes.com/svc/elections/us/v3/finances/2014/committees/superpacs.json?api-key=c353cbc0ae7d858a504f6ed663c0a326:5:69483126",
            dataType: 'jsonp',
            success: function(data) {
                for (var key in data.results) {
                    if (data.results != null) {
                        // From the json display the name, treasure name, state and link to fec
                        $('#twentyNewestSuperPacsContainer').append (
                            '<div class="pacs"><h5 id="' + data.results[key].id + '">' + data.results[key].name  + '</h5>' + 
                            '<p>Treasure: ' + data.results[key].treasurer + '</p>' +
                            '<p>State: ' + data.results[key].state + '</p>' +
                            '<p><a href="'  + data.results[key].fec_uri + '">FEC Link</a></p>' +
                            '</div>'
                        )
                    }
                };

            }

        });
    setTimeout(function(){
        console.log("timeout is off")
        $('#twentyNewestPacsContainer').marquee( {
                direction: 'up',
                duration: 50000,
                duplicated: true,
            });
            
            $('#twentyNewestSuperPacsContainer').marquee( {
                direction: 'up',
                duration: 50000,
                duplicated: true,
            });
    },9000);


});