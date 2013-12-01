var SW = SW || {};

(function() {
	if(!window.requestAnimationFrame) {
		window.requestAnimationFrame = 
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.msRequestAnimationFrame    ||
			function( callback ){
				window.setTimeout(callback, 1000 / 60);
			};
	}

	var perfnow = (function() {
		return (
			(performance && performance.now) ? function() { return performance.now(); }
			: (performance && performance.webkitNow) ? function() { return performance.webkitNow(); }
			: (performance && performance.mozNow) ? function() { return performance.mozNow(); }
			: (performance && performance.oNow) ? function() { return performance.oNow(); }
			: (Date.now) ? function() { return Date.now(); }
			: function() { return +new Date(); }
		)
	}());

	function loaded() {
		var lastUpdate = perfnow();

		function animate() {
			var now = perfnow(); 
			var div = now - lastUpdate; 
			var secs = div / 1000.0;

			SW.update(secs);
			SW.draw(SW.ctx);
			lastUpdate = now; 
			requestAnimationFrame(animate); 			
		}

		animate();
	};

	SW.loaded = loaded;
}());