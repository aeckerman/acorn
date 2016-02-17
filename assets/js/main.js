// Button click replace with enter:
$('#region').keyup(function(event){
	if(event.keyCode == 13){
		$('#go').click();
	}
});

// Go action
var get = function() {
	var inToGo = document.getElementById('region').value;
	alert(inToGo);
};