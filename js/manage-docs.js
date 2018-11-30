$(document).ready(function(){
    registerEventHandlers();
});

function registerEventHandlers() {
    $('#add-new-button').click(addNewButtonClick);
    $('#export-button').click(exportButtonClick);
    $('#view-button').click(viewButtonClick);
    $('.nav-home').click(navHomeClick);
    $('#save').click(saveNew);
    $('#scan').click(camera);
}

function navHomeClick() {
    window.location = '../index.html';
}

function viewButtonClick() {
    console.log('Clicked a view button'); 
    $('#viewModal').on('show.bs.modal', function (event) {
        var modal = $(this)
        })
}

function addNewButtonClick() {
    console.log('Clicked add new'); 
    $('#newModal').on('show.bs.modal', function (event) {
        var modal = $(this)
        })
}

function camera() {
    console.log('Clicked camera'); 
    $('#camera').on('show.bs.modal', function (event) {
        var modal = $(this)
        })
}

function exportButtonClick() {
    console.log('Clicked export');
    $('#exportModal').on('show.bs.modal', function (event) {
        var modal = $(this)
        })
}

function doneClick() {
    $('#picture').modal('hide');
    $('#newModal').modal('show');
    $('#scanned-name').html('<i>doctors-note.png</i>');
}

function sendClick() {
    
    var email = $("#recipient-name")[0].value;
    
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailValid = re.test(String(email).toLowerCase());

    if (emailValid) {
        $('#recipient-name').val('');
        $('#scanned-name').html('');
        $('#exportModal .invalid-warning').hide();
        $('#exportModal').modal('hide');
    } else {
        $('#recipient-name').effect("highlight", {color: '#ffa99b'}, 750);
        $('#exportModal .invalid-warning').text('Invalid Email Address');
        $('#exportModal .invalid-warning').show();
    }
}

function saveNew() {
    console.log('append');
    // Display modal for adding a symptom
    var options = { timeZone: 'UTC' };
    var rawDate = $("#newModal #date").val().trim();
    date = new Date(rawDate);
    date = date.toLocaleDateString("en-US", options);
    var name = $("#newModal #name")[0].value;
    
    var nameValid = name !== '';
    var dateValid = date !== '' && date !== 'Invalid Date';
    
    var invalidWarning = 'Invalid ';
    var invalidInputs = [];
    
    if (nameValid && dateValid) {
        $('#table tbody').before('<tr> <th scope="row"> <button class="styled-btn btn" id="view-button" data-toggle="modal" data-target="#viewModal">View</button></th><td>'+date+'</td><td>'+name+'</td><th scope="row"><button id="export-button" class="styled-btn btn btn-primary" data-toggle="modal" data-target="#exportModal">Export</button></th></tr>');
        $('#newModal #name').val('');
        $('#newModal #date').val('');
        $('#newModal .invalid-warning').hide();
        $('#newModal').modal('hide');
    } else {
        if (!nameValid) {
            $('#newModal #name').effect("highlight", {color: '#ffa99b'}, 750);
            invalidInputs.push('Name');
        }
        if (!dateValid) {
            $('#newModal #date').effect("highlight", {color: '#ffa99b'}, 750);
            
            var literalDate = $('#newModal #date').data('date');
            invalidInputs.push('Date');
        }
        invalidWarning += invalidInputs.join(' and ');
        $('#newModal .invalid-warning').text(invalidWarning);
        $('#newModal .invalid-warning').show();
    }
}
