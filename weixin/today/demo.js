 
var canvasID      = "canvasID";
var canvas_ele;
var width, height;
var status1;
function init_game(all_inputs ){
	alert("dd1");
  	canvas_ele   =  document.getElementById(canvasID) ;
	canvas_ele.addEventListener("click", onclick1, false);
 	canvas_ele.setAttribute('tabindex','0');
	canvas_ele.focus();
	width  = canvas_ele.width;
	height = canvas_ele.height;
	canvas_cts = canvas_ele.getContext("2d");
	status1 = 0; 
	alert("dd1");
	game_draw(0);
} 
function game_draw(isclock){ // 0) status1, 1) game_type, 2) time, time_left, 3) solved, unsolved, 4) this game history
alert("dd2");
	if (status1 == 0){
		draw_rect(Array(0,0, width, height), "#fff", 0, "#000"); // clean the whole region
		//draw_text (Array(xywh_init1[0] + xywh_init1[2] /5, xywh_init1[1] + xywh_init1[3] /1.9),game_type1, "#fff",  "bold " + Math.round(xywh_init1[2]/10) +"px sans-serif");
		alert("dd");
		return;
	}
}
function draw_rect(rect1, color1, border_wid1, color2 ){
	if (color1 !="fff")
	{
		canvas_cts.fillStyle = color1;   // button color
		canvas_cts.fillRect (Math.round(rect1[0]), Math.round(rect1[1]), Math.round(rect1[2]), Math.round(rect1[3]));	
	}
	else
		canvas_cts.clearRect (Math.round(rect1[0]), Math.round(rect1[1]), Math.round(rect1[2]), Math.round(rect1[3]));	
	canvas_cts.lineWidth   = Math.floor(border_wid1);
	canvas_cts.strokeStyle  = color2;   // button color
	if (border_wid1>0)
		canvas_cts.strokeRect(Math.round(rect1[0] + border_wid1/ 2), Math.round(rect1[1] + border_wid1/2), Math.round(rect1[2] - border_wid1), Math.round(rect1[3] - border_wid1));
}
