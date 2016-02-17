// Button click replace with enter:
$('#region').keyup(function(event){
	if(event.keyCode == 13){
		$('#go').click();
	}
});

// Go action
var get = function() {
	var data = document.getElementById('acr').value;
	$.get('http://www.nactem.ac.uk/software/acromine/dictionary.py?sf=' + data, function (json) {
	    var sf = json.lfs[0].lf;
	    var og = json.lfs[0].since;
        alert('Stands for: ' + sf);
        alert('Origin: ' + og);
    });
	//Debug: alert(inToGo);
};