//生成随机数 方法
/*function	GetRandomNum(min,max)
{
	var Range = max - min;
	var	rand = Math.random();
	return(min+Math.round(rand*Range));
}*/



$(function(){

	$('#alert>div').css('margin-left', ($('#alert').width()-$('#alert>div').width())/2);
	//$('#alert>div').css('margin-right', ($('#alert').width()-$('#alert>div').width())/2);
	

	//alert('50'>'5');
	var max = "";
var min = "";
	$('#SetRange').children('button').click(function() {
		var str = "";
		max = $('#max').val();//10
		min = $('#min').val();//5
		//判断合法字符
		if( max=="" && min==""){
			str = "逗我呢？你输入啥了？";
		}
		else if (max=="" && min!="") {str = "最大值没填"}
		else if (max!="" && min=="") {str = "最小值没填"}
		else{
			if (max<=0 || min<=0 ) {str = "请输入正数"}
			else{
				if (parseInt(max)!=max || parseInt(min)!=min) {
					str = "请输入整数";
				}
				else{
					if (parseInt(max) <= parseInt(min)) {
						str = "你知道啥是大啥是小么？";
					}
					else {
						str = "您输入的最大值为"+max+"，最小值为"+min+"，已成功提交。";
					}
				}

			
				
			}

				
		}
				
		AlertAbove(str);
	});

	$('#alert>button').click(function() {
		$('#alert').slideUp('slow');
	});
});


//底部界面弹出提示方法

function AlertAbove(Alertstr)
{
	$('#alert>p').html(Alertstr);
	$('#alert').slideDown('slow');
};
