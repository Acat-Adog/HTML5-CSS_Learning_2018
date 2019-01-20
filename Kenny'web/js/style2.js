function showTime(){
				var xdate = new Date();
				var xyear = xdate.getFullYear();
				var xmonth  = xdate.getMonth()+1;
				var xday = xdate.getDate();
				var xweek = xdate.getDay();
				var week = ["日","一","二","三","四","五","六"];
				var xhours = xdate.getHours();
				var xminutes = xdate.getMinutes();
				var xsceconds = xdate.getSeconds();
				var str = "";
				str = xyear + "年" + change(xmonth) + "月" + change(xday) + "日&nbsp;&nbsp;星期" + week[xweek] + "&nbsp;&nbsp" +change(xhours) + "时" + change(xminutes) + "分" + change(xsceconds) + "秒";
				document.getElementById("showTime").innerHTML=str;
				
			}
			function change(x){
				return (x>=10)?x:"0"+x;
			}
			window.setInterval(showTime,500);