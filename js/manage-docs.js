$(document).ready(function(){
    registerEventHandlers();
});

function registerEventHandlers() {
    $('#add-new-button').click(addNewButtonClick);
    $('#export-button').click(exportButtonClick);
    $('#view-button').click(viewButtonClick);
    $('.nav-home').click(navHomeClick);
    $('#save').click(saveNew);
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


function exportButtonClick() {
    console.log('Clicked export');
    $('#exportModal').on('show.bs.modal', function (event) {
        var modal = $(this)
        })
}


function saveNew() {
    console.log('append');
    // Display modal for adding a symptom
    var date = $("#newModal #date").val().trim()
    var name = $("#newModal #name").val().trim()
    $('#table tbody').append('<tr> <th scope="row"> <button class="btn" id="view-button" data-toggle="modal" data-target="#viewModal">View<i class="fa fa-home"></i></button></th><td>'+date+'</td><td>'+name+'</td><th scope="row"><button id="export-button" class="btn btn-primary" data-toggle="modal" data-target="#exportModal">Export</button></th></tr>');
}
