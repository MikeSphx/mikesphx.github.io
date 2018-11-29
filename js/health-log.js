$(document).ready(function(){
    registerEventHandlers();
});

function registerEventHandlers() {
    $("#masterfab").click(fabClick);
    $("#addMed").click(addMedClick);
    $("#logSymp").click(logSympClick);
    $("#save2").click(appendSympClick);
    $("#save1").click(appendMedClick);
    $('.nav-home').click(navHomeClick);
    $(".backdrop").click(backdropClick);
}

function navHomeClick() {
    window.location = '../index.html';
}

function backdropClick() {
    fabClick();
}

function fabClick() {
    console.log('Clicked FAB'); 
    if($(".backdrop").is(":visible")){
			$(".backdrop").fadeOut(125);
			$(".fab.child")
				.stop()
				.animate({
					bottom	: $("#masterfab").css("bottom"),
					opacity	: 0
				},125,function(){
					$(this).hide();
				});
            $("#plus-text").show();
            $("#undo-icon").hide();
		}else{
			jQuery(".backdrop").fadeIn(125);
			$(".fab.child").each(function(){
				$(this)
					.stop()
					.show()
					.animate({
						bottom	: (parseInt($("#masterfab").css("bottom")) + parseInt($("#masterfab").outerHeight()) + 70 * $(this).data("subitem") - $(".fab.child").outerHeight()) + "px",
						opacity	: 1
					},125);
			});
            $("#plus-text").hide();
            $("#undo-icon").show();
		}
}

function addMedClick() {
    console.log('Clicked Add Medicine');
    // Display modal for adding medicine
    $('#medModal').on('show.bs.modal', function (event) {
        var modal = $(this)
        })
    fabClick();
}

function logSympClick() {
    console.log('Clicked Log Symptom');
    // Display modal for adding a symptom
    $('#sympModal').on('show.bs.modal', function (event) {
        var modal = $(this)
        })
    fabClick();
}

function appendSympClick() {
    console.log('append');
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', timeZone: 'UTC' };
    // Display modal for adding a symptom
    var date = $("#sympModal #new-date2").val().trim();
    date = new Date(date);
    date = date.toLocaleDateString("en-US", options);
    var name = $("#sympModal #name").val().trim();
    $("h").prepend('<div class="oval"><div class="text-date"><p>'+date+'</p><div class="text-block"><p><b>Symptom:</b> '+name+'</p></div></div></div>');
}

function appendMedClick() {
    console.log('append');
    // Display modal for adding a symptom
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', timeZone: 'UTC' };
    var date = $("#medModal #new-date1").val().trim();
    date = new Date(date);
    date = date.toLocaleDateString("en-US", options);
    var name = $("#sympModal #name").val().trim();
    var name = $("#medModal #name").val().trim();
    $("h").prepend('<div class="oval"><div class="text-date"><p>'+date+'</p><div class="text-block"><p><b>Med taken:</b> '+name+'</p></div></div></div>');
}