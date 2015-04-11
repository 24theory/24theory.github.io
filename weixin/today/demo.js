var canvasID      = "canvasID";
var mainbodyID    = "page_body";
var canvas_ele;
var canw = xnum * 100, canh = 100 * ynum; 
var x_disp = Math.floor(0.5 * canw / (xnum+1)), y_disp =Math.floor( 0.5 * canh / (ynum+1));
var x_size = x_disp * 2, y_size = y_disp * 2; 
var width, height;
var status1;
var init_xywh;
var step, game_tick; 
var timerthis;
var x_pos, y_pos;
function init_game( ){
  	canvas_ele   =  document.getElementById(canvasID) ;
	canvas_ele.addEventListener("click", onclick1, false);
 	canvas_ele.setAttribute('tabindex','0');
	canvas_ele.focus(); 
	width  = canvas_ele.width;
	height = canvas_ele.height;
	init_xywh = Array(x_disp, canh/2 - y_disp, canw-x_disp *2, y_disp *2);
	canvas_cts = canvas_ele.getContext("2d");
	status1 = 0; 
	game_tick = 0; 
	clearInterval(timerthis);
	timerthis = setInterval(function(){tickclock()},10);
	alert([move[0], " ", move[1]," ", shape_x[1]," ", shape_x[0].length]);
	game_draw(0);
} 
function game_draw(isclock){ // 0) status1, 1) game_type, 2) time, time_left, 3) solved, unsolved, 4) this game history
	if (status1 == 0){
		draw_rect(Array(0,0, width, height), "#fff", 0, "#000"); // clean the whole region
		draw_rect(init_xywh, "#aaa", 0, "#000"); 
		var textrect =init_xywh.slice(); textrect[1] +=y_disp * 2; 
		draw_text (textrect, "点击开始看演示", "#fff",  "bold " + Math.round(canw/10) +"px sans-serif");
		return;
	}
	if(status1 ==1){
	    draw_rect(Array(0,0, width, height), "#fff", 0, "#000"); // clean the whole region
	    draw_text (init_xywh, game_tick, "#000",  "bold " + Math.round(canw/20) +"px sans-serif");
	    var m =[0,0];
	    redrawall(step);
	}
}
function redrawall(step1)
{
     var step2 = step1 % move.length; 
     for (ii = 0; ii < shape_x.length; ii++)
     {
         if(move[step2][0] == ii) 
         {
            x_pos[ii] += move[step2][1];
            y_pos[ii] += move[step2][2];
         } 
         var m = [x_pos[ii], y_pos[ii]];
         alert(x_pos+" " + step2);
         alert(m); 
    
         //alert([shape_x.length, 999, shape_x[ii], shape_y[ii], m]);
         draw_convex(shape_x[ii],shape_y[ii],m,"#000");
         
    }
}
function draw_convex(x_array,y_array,xy_vec, color1){
    var x_min = 100, x_max = -100;
    var y_min = 100, y_max = -100;
    var bord = x_size/10;
    for (ii=0; ii < x_array.length; ii++)
    {
        if(x_array[ii] < x_min){x_min = x_array[ii];}
        if(x_array[ii] > x_max){x_max = x_array[ii];}
        if(y_array[ii] < y_min){y_min = y_array[ii];}
        if(y_array[ii] > y_max){y_max = y_array[ii];}
    }
    x_min+=xy_vec[0];
    x_max+=xy_vec[0];
    y_min+=xy_vec[1];
    y_max+=xy_vec[1];
    var rect=[x_min * x_size + x_disp - bord, y_min * y_size + y_disp - bord,(x_max-x_min + 1)*x_size -2* bord, (y_max-y_min + 1)*y_size -2* bord ];
    draw_rect(rect, "fff", 10, color1);
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
function tickclock(){
	if (status1 == 1 ){ // status1 = 3 then it's waiting for the decision on quit or not
		game_tick +=1;
		if (game_tick % 100 ==0){
		    if(game_tick>100){step++;}
			game_draw(1);
		}	 
		
	}
}


function onclick1 (e){
	var canvas = document.getElementById(canvasID);
        var x, y;
        var mainbody = document.getElementById(mainbodyID);

       if (e.pageX != undefined && e.pageY != undefined) {
  		x = e.pageX;
		y = e.pageY;
       }
       else {
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop  + document.documentElement.scrollTop;
       }
       x -= (canvas.offsetLeft + mainbody.offsetLeft);
       y -= (canvas.offsetTop + mainbody.offsetTop);  
	switch (status1){
		case  0: // on the init-game screen
 			var rect_arr = new Array(init_xywh);
			game_genre = click_ID(x,y, rect_arr);
 			if (game_genre==0){
                            status1 = 1; 
                            game_tick = 0; 
                            step = 0; 
                            x_pos = init_x.slice();
                            y_pos = init_y.slice();
                            game_draw(1);
			}
			break;
		case 1:
		
		
		
		break;
	}
}
function click_ID(x,y, rect_array){
	var total = rect_array.length;
	var ii ;
	for ( ii = 0; ii < total ; ii ++){
 		if (x >= rect_array[ii][0] && x <= rect_array[ii][0] + rect_array[ii][2] && y >= rect_array[ii][1] && y <= rect_array[ii][1] + rect_array[ii][3]){
			return ii;
		}
	}
	return -1 ;
}