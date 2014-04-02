<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<title>有益智力游戏2048!</title>

<link href="http://pic.miliyo.com/wx/html/js/main.css" rel="stylesheet" type="text/css">
<meta name="viewport" content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui">

<meta property="og:title" content="2048 game"/>
<meta property="og:site_name" content="2048 game"/>
<meta property="og:description" content="Join the numbers and get to the 2048 tile! Careful: this game is extremely addictive!"/>
<meta property="og:image" content="http://pic.miliyo.com/wx/i/2048.jpg"/>


<script language="javascript" src="http://pic.miliyo.com/mapi/g/jq.mobi.min.js?gv=13_1"></script>
</head>
<body style="margin:5px 0 0 0;padding:0 10px;">

<div class="container"  >
  <div class="heading">
	<div class="title" style="width:90px;float:left;">
	<div style="font-size:35px; font-weight:bold;margin-top:5px; padding:0px;">2048！</div>
	<div style="font-size:12px;margin-top:-5px;margin-left:5px; padding:0px;">
	<a href="http://gabrielecirulli.com/about.html" style="color:#576edf;">意大利人Gabriele Cirulli发明</a>
	</div>
	</div>
	<div class="scores-container">
	  <div class="score-container">0</div>
	  <div class="best-container" id="best_score">0</div>
	</div>
  </div>
  
  <div class="above-game" style="display:none;">
      <a class="keep-playing-button">Keep going</a>
      <a class="restart-button">New Game</a>
    </div>
  
  <div class="game-container" style="margin:0 10px 0 0;" id="screenShotContainer">
	<div class="game-message" id="msg_box" style="">
	<div style="font-weight:bold;margin:120px 0 10px 0;font-size:20px;">合出数字: <span style="color:red;font-size:28px;" id="result_number"></span></div>

	  <div class="lower">
		<a class="retry-button">重新开始</a>
	  </div>
	</div>
	<div class="grid-container">
	  <div class="grid-row">
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
	  </div>
	  <div class="grid-row">
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
	  </div>
	  <div class="grid-row">
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
	  </div>
	  <div class="grid-row">
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
	  </div>
	</div>
	<div class="tile-container">
	</div>
  </div>
  <p class="game-explanation" style="margin:10px 0 10px 0px;line-height:20px;">
	<div style="float:left;width:230px;text-align:right;font-size:14px;"><strong >玩法：</strong><span style="font-size:14px;">用手指上下左右滑动,将两个 &nbsp; <br/>相同的数字合成一个,如2+2合出4 &nbsp; &nbsp; <br/>4+4合出8 .... <span style="color:#fccc00;">直到1024+1024合出↗</span></span></div>
	<div style="float:left;"><img src="http://pic.miliyo.com/wx/i/item_2048.png?v=3" style="height:50px;" /></div>
  </p>
</div>

<div style="clear:both; height:10px;">&nbsp;</div>
<div style="margin:0 10px;padding:5px; border:1px dashed #ccc;color:red;">
	点右上角按钮 <img src="http://pic.miliyo.com/wx/i/wxshare.png" style="width:20px;" />，分享结果到朋友圈。
	<div id="message" style="color:blue;"> </div>
</div>
 <script>
window.onload=function(){
	document.getElementById("message").innerHTML='<'+messages[Math.floor((Math.random()*messages.length))]+'>';
}
 </script>
<div style="font-size:6px;margin-top:-5px;margin-left:5px; padding:0px;"> 感谢miliyo, fcuk偷人家代码不给credit的人</div>

<script src="http://pic.miliyo.com/wx/html/js/bind_polyfill.js"></script>
<script src="http://pic.miliyo.com/wx/html/js/classlist_polyfill.js"></script>
<script src="http://pic.miliyo.com/wx/html/js/animframe_polyfill.js"></script>
<script src="http://pic.miliyo.com/wx/html/js/keyboard_input_manager.js"></script>
<script src="http://pic.miliyo.com/wx/html/js/html_actuator.js"></script>
<script src="http://pic.miliyo.com/wx/html/js/grid.js"></script>
<script src="http://pic.miliyo.com/wx/html/js/tile.js"></script>
<script src="http://pic.miliyo.com/wx/html/js/local_storage_manager.js"></script>
<script src="http://pic.miliyo.com/wx/html/js/game_manager.js"></script>
<script src="http://pic.miliyo.com/wx/html/js/application.js"></script>


<div style="background:rgba(0,0,0,0.9);position:absolute;top:0px; left:0px; width:100%;height:100%;z-index:10000;display:none;" id="result_div">
	<p style=" text-align:center;padding-left:50px;"><img src="http://pic.miliyo.com/wx/i/share.png?3" width="204"/></p>
	<div style="width:220px;height:250px; top:20px; left:25px;background:rgba(0,0,0,0.3);border:1px rgba(255,255,255,0.3) solid;border-radius:6px;padding:15px; text-align:center; position:relative;">
		<i style="position:absolute; background:url(http://pic.miliyo.com/wx/i/close.png); width:29px;height:29px; background-size:29px 29px; top:-10px;right:-14px;" onclick="$('#result_div').hide();"></i>

		<center style="line-height:25px;font-size:20px;margin-top:20px;color:#eee;" id="result_content">
		<span style="font-size:36px;"><font color="#fce700">2857!</font></span><br/><br/>
		天啦！在上海地区<br/>
		您的智商 <font color="#fc4d35">>76％</font> 的人<br/>
		反应速度 <font color="#fc4d35">>78％</font> 的人<br/>
		协调能力 <font color="#fc4d35">>82％</font> 的人<br/><br/>
		您属于<span style="color:#04e5f9; font-size:30px;">大师</span>级别！
		</center>

	</div>
</div>



<br/>
<script>
var cur_score = 0;
var show_end_tips = 1;

var number_tips = 0;
function show_medal()
{
	number_tips = max_number;
	
	var str = '';
	if(number_tips == 1024)
	{
		document.title = '有益智力游戏，哈哈哈！我合出了1024！你也行';
		str = '天呐！您居然合出了<br/><br/><span style="font-size:36px;color:#fce700">'+number_tips+'!</span><br/><br/>太帅气了<br/><div style="font-size:16px;padding-top:10px;color:#04e5f9; text-decoration:underline;" onclick="$(\'#result_div\').hide();">下个目标 -> '+ number_tips*2 +'　加油哦！</div>';
	}
	else if(number_tips == 2048)
	{
		document.title = '有益智力游戏，哈哈哈！我合出了2048！您野型？';
		str = '神呐！您居然合出了<br/><br/><span style="font-size:36px;color:#fce700">'+number_tips+'!</span><br/><br/>真是NB<br/><div style="font-size:16px;padding-top:10px;color:#04e5f9; text-decoration:underline;" onclick="$(\'#result_div\').hide();">终极目标 -> '+ number_tips*2 +'　加油哦！</div>';
	}
	
	$('#result_div').show();
	$('#result_content').html(str);
		
}

function set_title()
{
	
		
	document.title = '有益智商游戏2048！我得了'+cur_score+'分！还行吧';
		
	if(number_tips<max_number && (max_number == 1024 || max_number == 2048))
	{
		show_medal();
	}
	
	if(game_over==1 && cur_score>2000 && show_end_tips==1)
	{
		//高手，专家，大师，神
		if(cur_score<4000)
		{
			zs_num=56;
			fy_num=70;
			sd_num=60;
			
			level_name = '高手';
			zs_num += Math.floor((cur_score/4000)*200+8)/10;
			fy_num += Math.floor((cur_score/4000)*200+1)/10;
			sd_num += Math.floor((cur_score/4000)*200+5)/10;
		}
		else if(cur_score<6000)
		{
			zs_num=68;
			fy_num=70;
			sd_num=72;
			
			level_name = '专家';
			zs_num += Math.floor((cur_score/6000)*200+2)/10;
			fy_num += Math.floor((cur_score/6000)*200+7)/10;
			sd_num += Math.floor((cur_score/6000)*200+6)/10;
		}
		else if(cur_score<10000)
		{
			zs_num=79;
			fy_num=75;
			sd_num=78;
			
			level_name = '大师';
			zs_num += Math.floor((cur_score/10000)*200+4)/10;
			fy_num += Math.floor((cur_score/10000)*200+1)/10;
			sd_num += Math.floor((cur_score/10000)*200+5)/10;
		}
		else if(cur_score>10000)
		{
			level_name = '神';
			zs_num = 99;
			fy_num = 99;
			sd_num = 99;
		}
		
		
		$('#result_div').show();
		$('#result_content').html('<span style="font-size:36px;"><font color="#fce700">'+cur_score+'!</font></span><br/><br/>'
		+'天呐！在中国地区<br/>'
		+'您的智商 <font color="#fc4d35">>'+zs_num+'％</font> 的人<br/>'
		+'反应速度 <font color="#fc4d35">>'+fy_num+'％</font> 的人<br/>'
		+'协调能力 <font color="#fc4d35">>'+sd_num+'％</font> 的人<br/><br/>'
		+'您属于<span style="color:#04e5f9; font-size:30px;">'+level_name+'</span>级别！');
		
	}
}
        var imgUrl = 'http://pic.miliyo.com/wx/i/item_2048.png';
        var lineLink = 'http://24theory.github.io/weixin/';
        var descContent = '我得了'+cur_score+'分！还行吧';
        var shareTitle = '有益智力游戏2048';
        var appid = '';
        
        function shareFriend() {
		descContent = '我得了'+cur_score+'分！最后一块有'+ max_number +'. 还行吧.\n\r';
descContent += '<'+messages[Math.floor((Math.random()*messages.length))]+'>';
            WeixinJSBridge.invoke('sendAppMessage',{
                "appid": appid,
                "img_url": imgUrl,
                "img_width": "200",
                "img_height": "200",
                "link": lineLink,
                "desc": descContent,
                "title": shareTitle
            }, function(res) {
                //_report('send_msg', res.err_msg);
            })
        }
        function shareTimeline() {
		descContent = '我得了'+cur_score+'分！最后一块有'+ max_number +'. 还行吧.\n\r';
descContent += '<'+messages[Math.floor((Math.random()*messages.length))]+'>';            WeixinJSBridge.invoke('shareTimeline',{
                "img_url": imgUrl,
                "img_width": "200",
                "img_height": "200",
                "link": lineLink,
                "desc": descContent,
                "title": shareTitle
            }, function(res) {
                   //_report('timeline', res.err_msg);
            });
        }
        function shareWeibo() {
		descContent = '我得了'+cur_score+'分！最后一块有'+ max_number +'. 还行吧.\n\r';
descContent += '<'+messages[Math.floor((Math.random()*messages.length))]+'>';
            WeixinJSBridge.invoke('shareWeibo',{
                "content": descContent,
                "url": lineLink,
            }, function(res) {
                //_report('weibo', res.err_msg);
            });
        }
        // ???????????????????WeixinJSBridgeReady???
        document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
            // ?????
            WeixinJSBridge.on('menu:share:appmessage', function(argv){
                shareFriend();
            });
            // ??????
            WeixinJSBridge.on('menu:share:timeline', function(argv){
                shareTimeline();
            });
            // ?????
            WeixinJSBridge.on('menu:share:weibo', function(argv){
                shareWeibo();
            });
        }, false);

var messages=new Array("勿忘731， 关注中央电视台新纪录片",
"西红柿是水果, 做熟了就算蔬菜了",
"冬季奥运会应该由哈尔滨来申办",
"科技绝对是第一生产力, 生娃是第一动力",
"要练出6块腹肌,减脂绝对不能少,得多跑",
"日本车其实质量很一般",
"东北虎绝对是陆地上最猛的非人类动物",
"一切不以结婚为目的的恋爱都是耍流氓！",
"没有任何证据表明上帝存在过！",
"秦琼肯定打不过关羽！",
"北大是所好学校",
"北京空气不好是因为傻逼们都要开SUV",
"微波炉中不要放置金属器皿",
"韩乔生是个好同志",
"王菲生于1969年8月8日",
"钓鱼岛是中国的！",
"Beatles是个好乐队",
"过去30年， 中国两大作家：王朔，王小波",
"且行且珍惜，感谢政府， 感谢人民"
);

 </script>

</body>
</html>
