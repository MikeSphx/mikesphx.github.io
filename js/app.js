$(document).ready(function(){
    setupChecklist();
    registerEventHandlers();
});

// Event handlers

function registerEventHandlers() {
    $('#health-log-button').click(healhLogButtonClick);
    $('#manage-docs-button').click(manageDocsButtonClick);
    $('#complete-task-button').click(completeTaskButtonClick);
    $('.nav-home').click(navHomeClick);
}

function healhLogButtonClick() {
    console.log('Clicked health log button');
    window.location = './pages/health-log.html';
}

function manageDocsButtonClick() {
    console.log('Clicked manage docs button');
    window.location = './pages/manage-docs.html';
}

function completeTaskButtonClick() {
    // Remove the selected reminders
    $('.list-group-item-custom').remove();
    // Update the reminders count
    updateRemindersCount();
}

function updateRemindersCount() {
    var numReminders = $('.list-group-item').length;
    $('#reminder-num').text(numReminders);
}

function navHomeClick() {
    window.location = './index.html';
}

// Setting up checklist

function setupChecklist() {
    $.getJSON( "ajax/../data/reminders.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          //<li class="list-group-item no-select" data-color="custom">Cras justo odio</li>
            items.push('<li class="list-group-item no-select" data-color="custom">'+val.text+
                       '<span class="list-group-time">'+val.time+'</span></li>');
        });
      
        var itemsHTML = items.join("");
        $('ul.checked-list-box').append(itemsHTML);
        stylizeChecklist();
        updateRemindersCount();
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