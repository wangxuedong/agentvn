function formatEnabled(a){return a?"<font color='blue'>\u542f\u7528</font>":"<font color='red'>\u7981\u7528</font>"}function formatSchedule(a){return a?"<font color='blue'>\u5df2\u8bbe\u7f6e</font>":"<font color='red'>\u8bbe\u7f6e\u4e2d</font>"}function getParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=RegExp("[\\?&]"+a+"=([^&#]*)").exec(window.location.search);return null==a?"":decodeURIComponent(a[1].replace(/\+/g," "))}
function getAdUrl(a,d,b,c,e){return 1==e?"<a href='/ad_report_phase.html?ClassID="+a+"&MediaID="+d+"&ADID="+b+"&Date="+c+"'>\u221a</a>":" "}function checkAllByID(a){for(var d=document.getElementsByTagName("input"),b=d.length,c=0;c<b;c++)"checkbox"==d[c].type&&d[c].name==name&&(d[c].checked=a.checked)}function checkAllByName(a,d){var b=document.getElementsByName(d);if(void 0!=b)for(var c=0;c<b.length;c++)b[c].checked=a.checked};var pageindex=1,pagesize=20;$(function(){get_adclass_page();$("#btnOK").click(function(){0==$("#hidID").val()?add_adclass():update_adclass()})});function clear_form(){$("#hidID").val(0);$("#txtClassName").val(" ");$("#txtRemark").val(" ")}
function get_adclass_page(){clear_form();$.ajax({url:"http://ggfx.syyx.cn/ad_class_page?r="+Math.random(),type:"get",dataType:"json",data:{PageIndex:pageindex,PageSize:pagesize},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(a){$("#tt tbody").find("tr.newrow").remove();$.each(a.rows,function(a,b){$("<tr class='newrow'></tr>").append("<td>"+b.ClassName+"</td><td>"+b.Remark+"</td><td>"+b.Numbers+"</td><td>"+formatEnabled(b.IsEnabled)+"</td><td>"+
formatEnabled(b.IsShow)+"</td><td><a href='ad_media.html?ClassID="+b.ID+"'>\u6dfb\u52a0\u5a92\u4f53</a>&nbsp<a href='javascript:void("+b.ID+");' onclick='get_adclass_record("+b.ID+")'>\u7f16\u8f91</a></td>").appendTo($("#tt tbody"))});$("#pp").pagination({total:a.total,pageSize:pagesize,showPageList:!1,showRefresh:!1,onSelectPage:function(a){pageindex=a;get_adclass_page(a)}})}})}
function get_adclass_record(a){$("#hidID").val(a);$.ajax({url:"http://ggfx.syyx.cn/ad_class_record?r="+Math.random(),type:"get",dataType:"json",data:{ID:a},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(a){0<a.rows.length&&(a=a.rows[0],$("#txtClassName").val(a.ClassName),$("#txtRemark").val(a.Remark),$("#chkIsEnabled").attr("checked",a.IsEnabled),$("#chkIsShow").attr("checked",a.IsShow))}})}
function add_adclass(){var a=$("#txtClassName").val(),d=$("#txtRemark").val(),b=$("#chkIsEnabled").attr("checked"),c=$("#chkIsShow").attr("checked");!a||""==a?alert("\u5a92\u4f53\u7c7b\u578b\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"):$.ajax({url:"http://ggfx.syyx.cn/ad_class_add?r="+Math.random(),type:"get",dataType:"json",data:{ClassName:a,Remark:d,IsEnabled:b,IsShow:c},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(a){0==a.retcode?(alert("\u6dfb\u52a0\u5a92\u4f53\u7c7b\u578b\u6210\u529f"),
get_adclass_page()):3==a.retcode?alert("\u8be5\u5a92\u4f53\u7c7b\u578b\u5df2\u7ecf\u5b58\u5728"):alert("\u6dfb\u52a0\u5a92\u4f53\u7c7b\u578b\u5931\u8d25")}})}
function update_adclass(){var a=$("#hidID").val(),d=$("#txtClassName").val(),b=$("#txtRemark").val(),c=$("#chkIsEnabled").attr("checked"),e=$("#chkIsShow").attr("checked");!d||""==d?alert("\u5a92\u4f53\u7c7b\u578b\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"):$.ajax({url:"http://ggfx.syyx.cn/ad_class_update?r="+Math.random(),type:"get",dataType:"json",data:{ID:a,ClassName:d,Remark:b,IsEnabled:c,IsShow:e},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(a){0==
a.retcode?(alert("\u4fee\u6539\u5a92\u4f53\u7c7b\u578b\u6210\u529f"),get_adclass_page()):2==a.retcode?alert("\u8be5\u5a92\u4f53\u7c7b\u578b\u5df2\u7ecf\u5b58\u5728"):alert("\u4fee\u6539\u5a92\u4f53\u7c7b\u578b\u5931\u8d25")}})};