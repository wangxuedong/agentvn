$(document).ready(function(){$("#txtStartDate,#txtEndDate").datepicker({changeMonth:!0,changeYear:!0,dayNamesMin:"\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),dateFormat:"yy-mm-dd",monthNamesShort:"\u4e00\u6708,\u4e8c\u6708,\u4e09\u6708,\u56db\u6708,\u4e94\u6708,\u516d\u6708,\u4e03\u6708,\u516b\u6708,\u4e5d\u6708,\u5341\u6708,\u5341\u4e00\u6708,\u5341\u4e8c\u6708".split(","),yearRange:"-60:+00",maxDate:"+0d",duration:"fast"});getServerList();getGoodsTypeList();$("#btnQuery").bind("click",
function(){getGoodsList()})});
function getServerList(){$.ajax({url:"http://nysjdm.syyx.cn/parameter/link_server_viewlist?r="+Math.random(),type:"get",dataType:"json",data:{},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(e){$("#serverList").empty();$('<option value="0">\u5168\u670d</option>').appendTo($("#serverList"));$.each(e.rows,function(a,d){$('<option value="'+d.ServerID+'"> '+d.Title+"</option>").appendTo($("#serverList"))})}});$("#txtStartDate").val("");$("#txtEndDate").val("");
$("#InOutTypeList").val(1)}function getGoodsTypeList(){$.ajax({url:"http://nysjdm.syyx.cn/parameter/config_class_list?r="+Math.random(),type:"get",dataType:"json",data:{ParamsType:"Goods"},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(e){$("#goodsTypeList").empty();$.each(e.rows,function(a,d){$('<option value="'+d.ID+'"> '+$.trim(d.ClassName)+"</option>").appendTo($("#goodsTypeList"))});$("#goodsTypeList")[0].selectedIndex=1}})}
function getGoodsList(){var e="",a="",d={},n=$("#serverList").children("option:selected").val(),k=$("#txtStartDate").val(),l=$("#txtEndDate").val(),m=$("#goodsTypeList").children("option:selected").val(),f=$("#InOutTypeList").children("option:selected").val(),i=$.trim($("#goodsTypeList").children("option:selected").text());!k||""==k?$.messager.alert("\u63d0\u793a","<font color=red><b>\u67e5\u8be2\u5f00\u59cb\u65f6\u95f4\u4e0d\u80fd\u4e3a\u7a7a</b></font>","error"):!l||""==l?$.messager.alert("\u63d0\u793a",
"<font color=red><b>\u67e5\u8be2\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u4e3a\u7a7a</b></font>","error"):(e="\u7cbe\u529b"==i||"\u6d3b\u529b"==i?1==f?"Game_VirtualCreate":"Game_VirtualDestroy":1==f?"Game_SingleCreate":"Game_SingleDestroy",$.ajax({url:"http://nysjdm.syyx.cn/parameter/config_items_list_able?r="+Math.random(),type:"get",dataType:"json",data:{ClassID:m,GetType:f},success:function(j){for(var i=j.rows.length,b=0;b<i;b++)a+="["+j.rows[b].ItemNo+"],",d[j.rows[b].ItemNo]=j.rows[b].ItemName;a=
a.substring(0,a.length-1);$.ajax({url:"http://nysjdm.syyx.cn/gameanalyse/game_goods_list?r="+Math.random(),type:"get",dataType:"json",data:{TableName:e,StartDate:k,EndDate:l,ServerID:n,ClassID:m,ItemList:a,GetType:f},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(a){$("#tableGoods thead").remove();$("#tableGoods tbody").remove();var c,g="<tbody>",e=a.rows.length;c="<thead><tr><th>\u65e5\u671f</th>";for(var h in a.rows[0])d[h]&&(c+="<th>"+d[h]+
"</th>");$(c+"<th>\u5408\u8ba1</th></tr></thead>").appendTo("#tableGoods");for(c=0;c<e;c++){h=0;var g=g+("<tr class='newrow'><td>"+a.rows[c].CreateDate+"</td>"),b;for(b in a.rows[0])if("CreateDate"!=b){var f="NULL"==a.rows[c][b]?0:a.rows[c][b];h+=f;g+="<td>"+f+"</td>"}g+="<td>"+h+"</td></tr>"}$(g+"</tbody>").appendTo("#tableGoods")}})}}))};