var game_storeClass = require("../../model/nycsgame/game_table4.js")
exports.action = function(req,res){
    var tableName   = req.body.TableName;
    var startDate   = req.body.StartDate;
    var endDate     = req.body.EndDate;
    var serverID    = req.body.ServerID;
    var classID     = req.body.ClassID;
    var itemList    = req.body.ItemList;
    var getType     = req.body.GetType;
    game_storeClass.get_list(tableName,startDate,endDate,serverID,classID,itemList,getType,function(err,rows){
        res.send({"rows":rows})
    })
}