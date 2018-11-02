$(document).ready(function(){
    setupChecklist();
    registerEventHandlers();
});

// Event handlers

function registerEventHandlers() {
    $('#health-log-button').click(healhLogButtonClick);
    $('#manage-docs-button').click(manageDocsButtonClick);
}

function healhLogButtonClick() {
    console.log('Clicked health log button');
    window.location = './pages/health-log.html';
    
}

function manageDocsButtonClick() {
    console.log('Clicked manage docs button');
    window.location = './pages/manage-docs.html';
}

// Setting up checklist

function setupChecklist() {
    loadChecklist();
    stylizeChecklist();
}

function loadChecklist() {
    $.getJSON( "ajax/../data/reminders.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            //items.push( "<li id='" + key + "'>" + val + "</li>" );
            console.log(val);
        });

//        $( "<ul/>", {
//            "class": "my-new-list",
//            html: items.join( "" )
//        }).appendTo( "body" );
    });
}

function stylizeChecklist() {
    $('.list-group.checked-list-box .list-group-item').each(function () {
        var $widget = $(this),
        $checkbox = $('<input type="checkbox" class="hidden" />'),
        color = ($widget.data('color') ? $widget.data('color') : "primary"),
        style = ($widget.data('style') == "button" ? "btn-" : "list-group-item-"),
        settings = {
            on: {
                icon: 'fa fa-check-square-o'
            },
            off: {
                icon: 'fa fa-square-o'
            }
        };
        $widget.css('cursor', 'pointer');
        $widget.append($checkbox);
        
            // Event Handlers
        $widget.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });
        
        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $widget.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $widget.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$widget.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $widget.addClass(style + color);
            } else {
                $widget.removeClass(style + color);
            }
        }

        // Initialization
        function init() {

            if ($widget.data('checked') == true) {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
            }

            updateDisplay();

            // Inject the icon if applicable
            if ($widget.find('.state-icon').length == 0) {
                $widget.prepend('<i class="state-icon ' + settings[$widget.data('state')].icon + '"></i>');
            }
        }
        init();
    });
}