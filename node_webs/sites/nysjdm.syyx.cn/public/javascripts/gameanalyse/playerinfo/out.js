$(document).ready(function(){$("#txtStartDate,#txtEndDate").datepicker({changeMonth:!0,changeYear:!0,dayNamesMin:"\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),dateFormat:"yy-mm-dd",monthNamesShort:"\u4e00\u6708,\u4e8c\u6708,\u4e09\u6708,\u56db\u6708,\u4e94\u6708,\u516d\u6708,\u4e03\u6708,\u516b\u6708,\u4e5d\u6708,\u5341\u6708,\u5341\u4e00\u6708,\u5341\u4e8c\u6708".split(","),yearRange:"-60:+00",maxDate:"+0d",duration:"fast"});getServerList();$("#btnQuery").bind("click",function(){getPlayerInfoList()})});
function getServerList(){$.ajax({url:"http://nysjdm.syyx.cn/parameter/link_server_viewlist?r="+Math.random(),type:"get",dataType:"json",data:{},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(d){$("#serverList").empty();$('<option value="0">\u5168\u670d</option>').appendTo($("#serverList"));$.each(d.rows,function(c,b){$('<option value="'+b.ServerID+'"> '+b.Title+"</option>").appendTo($("#serverList"))})}});$("#txtStartDate").val("");$("#txtEndDate").val("")}
function getPlayerInfoList(){var d=$("#serverList").children("option:selected").val(),c=$("#txtStartDate").val(),b=$("#txtEndDate").val();!c||""==c?$.messager.alert("\u63d0\u793a","<font color=red><b>\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4\u4e0d\u80fd\u4e3a\u7a7a</b></font>","error"):!b||""==b?$.messager.alert("\u63d0\u793a","<font color=red><b>\u67e5\u8be2\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u4e3a\u7a7a</b></font>","error"):$.ajax({url:"http://nysjdm.syyx.cn/gameanalyse/game_playerinfoshow_list?r="+
Math.random(),type:"get",dataType:"json",data:{ServerID:d,StartDate:c,EndDate:b},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(b){$("#tablePlayerInfo tbody").find("tr.newrow").remove();$.each(b.rows,function(b,a){$("<tr class='newrow'></tr>").append("<td>"+a.CreateDate+"</td><td>"+a.Title+"</td><td>"+a.GD10+"</td><td>"+a.JW10+"</td><td>"+a.QX10+"</td><td>"+a.YN10+"</td><td>"+a.GD20+"</td><td>"+a.JW20+"</td><td>"+a.QX20+"</td><td>"+a.YN20+"</td><td>"+
a.GD30+"</td><td>"+a.JW30+"</td><td>"+a.QX30+"</td><td>"+a.YN30+"</td><td>"+a.GD40+"</td><td>"+a.JW40+"</td><td>"+a.QX40+"</td><td>"+a.YN40+"</td><td>"+a.GD50+"</td><td>"+a.JW50+"</td><td>"+a.QX50+"</td><td>"+a.YN50+"</td><td>"+a.GD60+"</td><td>"+a.JW60+"</td><td>"+a.QX60+"</td><td>"+a.YN60+"</td><td>"+a.GD70+"</td><td>"+a.JW70+"</td><td>"+a.QX70+"</td><td>"+a.YN70+"</td><td>"+a.GD80+"</td><td>"+a.JW80+"</td><td>"+a.QX80+"</td><td>"+a.YN80+"</td><td>"+a.GD90+"</td><td>"+a.JW90+"</td><td>"+a.QX90+
"</td><td>"+a.YN90+"</td><td>"+a.GD100+"</td><td>"+a.JW100+"</td><td>"+a.QX100+"</td><td>"+a.YN100+"</td>").appendTo($("#tablePlayerInfo tbody"))})}})};