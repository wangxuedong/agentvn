//----------------------------------------------------------------
// config_params.js
//------------------------------------------------------------------
exports.get_list = function(cbfunc){
    var db = ms.db.mssql['Analysis_TIMENYCS_Config']
    var sp_name = 'cp_Config_Params_GetRecordList'
    
    if (!db){
        console.error('db not connected')
        return ;
    }
    var args = []
    db.exec_sp(sp_name,args,function(err,rows,output,ret){
        if(err){
            console.error(err);
            cbfunc(1,'');
            return 
        }
        cbfunc(0,rows);
    })
}