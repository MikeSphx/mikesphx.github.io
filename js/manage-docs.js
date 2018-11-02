$(document).ready(function(){
    registerEventHandlers();
});

function registerEventHandlers() {
    $('#add-new-button').click(addNewButtonClick);
    $('#export-button').click(exportButtonClick);
    $('#view-button').click(viewButtonClick);
    $('.nav-home').click(navHomeClick);
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

