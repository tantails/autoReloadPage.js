var uri=window.location.href;

$.get(uri, function(data) {
	lastdata=data;
});

setInterval(function(){
	$.get(uri, function(data) {
		if (lastdata!=data){
			location.reload();
		}
	});
}, 1000);