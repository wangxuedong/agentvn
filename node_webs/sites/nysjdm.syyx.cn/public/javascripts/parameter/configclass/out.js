function formatEnabled(a){return a?'<font color="blue">\u662f</font>':'<font color="red">\u5426</font>'}function formateDate(a){a=a.substring(a.indexOf(" ")).split(":");return{Hour:a[0],Minute:a[1]}}function getDate(a){var c=a.getFullYear(),b=a.getMonth()+1;10>b&&(b="0"+b);a=a.getDate();10>a&&(a="0"+a);return c+"-"+b+"-"+a};$(document).ready(function(){$("#hiddenID").val(0);clear_form();getParamsList();$("#btnAdd").toggle(function(){$("#btnAdd").val("\u53d6\u6d88");clear_form()},function(){$("#btnAdd").val("\u6dfb\u52a0");clear_form()});$("#btnSave").bind("click",function(){0==$("#hiddenID").val()?add_class():upd_class()});$("#configClass").change(function(a){var c=$(this).children("option:selected").val();getClassList(c);$("#configClassDel").val(c);$("#txtClassNo").val("");$("#txtClassName").val("");a.stopPropagation()})});
function getParamsList(){$.ajax({url:"http://nysjdm.syyx.cn/parameter/config_params_list?r="+Math.random(),type:"get",dataType:"json",data:{},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(a){$("#configClass").empty();$.each(a.rows,function(a,b){$('<option value="'+b.ParamsFlag+'"> '+b.ParamsName+"</option>").appendTo($("#configClass"));$('<option value="'+b.ParamsFlag+'"> '+b.ParamsName+"</option>").appendTo($("#configClassDel"))});getClassList($("#configClass").children("option:selected").val())}})}
function getClassList(a){$("#listconfigPara").datagrid({url:"http://nysjdm.syyx.cn/parameter/config_class_list_post?ParamsType="+a+"&r="+Math.random(),title:"\u53c2\u6570\u914d\u7f6e",width:600,fitColumns:!0,nowrap:!1,rownumbers:!0,singleSelect:!0,columns:[[{field:"ClassNo",title:"\u7f16\u53f7",width:100,align:"center"},{field:"ClassName",title:"\u540d\u79f0",width:250,align:"center"},{field:"op",title:"\u64cd\u4f5c",width:60,align:"center",formatter:function(a,b){return"<a href='#' onclick=get_record_info("+
b.ID+")>\u7f16\u8f91</a>  <a href='#' onclick=del_record_info("+b.ID+")>\u5220\u9664</a>"}}]]})}
function get_record_info(a){$("#configClassDel").val($("#configClass").children("option:selected").val());$("#hiddenID").val(a);$.ajax({url:"http://nysjdm.syyx.cn/parameter/config_class_info?r="+Math.random(),type:"get",dataType:"json",data:{ClassID:a},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(a){0<a.rows.length&&(a=a.rows[0],$("#txtClassNo").val(a.ClassNo),$("#txtClassName").val(a.ClassName))}})}
function del_record_info(a){$.messager.confirm("\u786e\u8ba4","\u786e\u5b9a\u8981\u5220\u9664\u8be5\u8bb0\u5f55\u5417\uff1f",function(c){c&&$.ajax({url:"http://nysjdm.syyx.cn/parameter/config_class_del?r="+Math.random(),type:"get",dataType:"json",data:{ClassID:a},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(a){0==a.err?($.messager.alert("\u63d0\u793a","\u5220\u9664\u8bb0\u5f55\u6210\u529f","info"),a=$("#configClass").val(),getClassList(a)):
$.messager.alert("\u63d0\u793a","<font color=red><b>\u5220\u9664\u8bb0\u5f55\u5931\u8d25</b></font>","error")}})})}function clear_form(){$("#hiddenID").val(0);$("#txtClassNo").val("");$("#txtClassName").val("")}
function add_class(){var a=$("#txtClassNo").val(),c=$("#txtClassName").val(),b=$("#configClassDel").val();!a||""==a?$.messager.alert("\u63d0\u793a","<font color=red><b>\u7f16\u53f7\u4e0d\u80fd\u4e3a\u7a7a</b></font>","error"):!c||""==c?$.messager.alert("\u63d0\u793a","<font color=red><b>\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a</b></font>","error"):$.ajax({url:"http://nysjdm.syyx.cn/parameter/config_class_add?r="+Math.random(),type:"get",dataType:"json",data:{ClassNo:a,ClassName:c,ParamsType:b},beforeSend:function(){$("#loading").show()},
complete:function(){$("#loading").hide()},success:function(a){0==a.err?($.messager.alert("\u63d0\u793a","\u6dfb\u52a0\u8bb0\u5f55\u6210\u529f","info"),a=$("#configClassDel").val(),getClassList(a)):$.messager.alert("\u63d0\u793a","<font color=red><b>\u6dfb\u52a0\u8bb0\u5f55\u5931\u8d25</b></font>","error")}})}
function upd_class(){var a=$("#hiddenID").val(),c=$("#txtClassNo").val(),b=$("#txtClassName").val(),d=$("#configClassDel").val();!c||""==c?$.messager.alert("\u63d0\u793a","<font color=red><b>\u7f16\u53f7\u4e0d\u80fd\u4e3a\u7a7a</b></font>","error"):!b||""==b?$.messager.alert("\u63d0\u793a","<font color=red><b>\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a</b></font>","error"):$.ajax({url:"http://nysjdm.syyx.cn/parameter/config_class_upd?r="+Math.random(),type:"get",dataType:"json",data:{ClassID:a,ClassNo:c,
ClassName:b,ParamsType:d},beforeSend:function(){$("#loading").show()},complete:function(){$("#loading").hide()},success:function(a){0==a.err?($.messager.alert("\u63d0\u793a","\u66f4\u65b0\u8bb0\u5f55\u6210\u529f","info"),a=$("#configClassDel").val(),getClassList(a)):$.messager.alert("\u63d0\u793a","<font color=red><b>\u66f4\u65b0\u8bb0\u5f55\u5931\u8d25</b></font>","error")}})};