var canvasID      = "canvasID";
var canvas_ele;
var width, height;
var status1;

function init_game( ){
  	canvas_ele   =  document.getElementById(canvasID) ;
//	canvas_ele.addEventListener("click", onclick1, false);
 	canvas_ele.setAttribute('tabindex','0');
	canvas_ele.focus(); 
	width  = canvas_ele.width;
	height = canvas_ele.height;
	canvas_cts = canvas_ele.getContext("2d");
	status1 = 0; 
	game_draw(0);
} 
function game_draw(isclock){ // 0) status1, 1) game_type, 2) time, time_left, 3) solved, unsolved, 4) this game history
	if (status1 == 0){
		draw_rect(Array(0,0, width, height), "#fff", 0, "#000"); // clean the whole region
		draw_rect(Array(x_disp, canh/2 - y_disp, canw-x_disp *2, y_disp *2), "#aaa", 0, "#000"); 
		//draw_text (Array(x_disp, canh/2 + y_disp, canw-x_disp *2, y_disp *2), "点击开始看演示", "#fff",  "bold " + Math.round(canw/10) +"px sans-serif");
		alert(shape_x[0][1]);
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

function draw_text (xy_array, text1, fillstyle1, font1){
	canvas_cts.fillStyle = fillstyle1; // font color
	canvas_cts.font = font1; 
	canvas_cts.fillText(text1, Math.round(xy_array[0]), Math.round(xy_array[1]));
}