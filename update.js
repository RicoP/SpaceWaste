var SW = SW || {};

(function() {
	SW.objects = [
		{ 
			position : {x : 100, y : 200}, 
			radius : 50,
			angle : 0, 
			rotatingSpeed : 0.5,
			movable : true 
		}
	];

	function update(sec) {
		for (var i = SW.objects.length - 1; i >= 0; i--) {
			var obj = SW.objects[i];
			obj.angle += obj.rotatingSpeed * sec;
		};
	}

	SW.update = update; 
}());