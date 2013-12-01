var SW = SW || {};

$(function() {
	var canvas = $("canvas")[0];
	var ctx = canvas.getContext("2d");

	SW.ctx = ctx; 
	SW.loaded(); 
});