var SW = SW || {};

(function() {
	function clear(c) {
		c.fillStyle = "black";
		c.fillRect(0, 0, c.canvas.width, c.canvas.height);
	}

	function draw(c) {
		clear(c); 

		for (var i = SW.objects.length - 1; i >= 0; i--) {
			var obj = SW.objects[i];

			c.beginPath();
			c.arc(obj.position.x, obj.position.y, obj.radius, obj.angle, obj.angle + 6, false);
			c.fillStyle = 'green';
			c.fill();
			c.lineWidth = 5;
			c.strokeStyle = '#003300';
			c.stroke();
		};
	}

	SW.draw = draw;
}());