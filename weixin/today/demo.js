 
var canvasID      = "canvasID";
var canvas_ele;
var canvas_cts; 
 
function init_game(all_inputs ){
  	canvas_ele   =  document.getElementById(canvasID) ;
	canvas_ele.addEventListener("click", onclick1, false);
 	canvas_ele.setAttribute('tabindex','0');
	canvas_ele.focus();
	width  = canvas_ele.width;
	height = canvas_ele.height;
  
} 
