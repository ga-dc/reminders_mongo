var Schema = require("../db/schema.js");

var AuthorModel = Schema.AuthorModel;
var ReminderModel = Schema.ReminderModel;

var authorsController = {
  index: function(){
    AuthorModel.find({});
  },
  show: function(name){
    AuthorModel.findOne({name:name});
  },
  update: function(name, update){
    AuthorModel.findOneAndUpdate({name:name},{name:update},{new:true},function(err){
      if(err){console.log(err);}
    });
  },
  delete: function(name){
    AuthorModel.findOneAndRemove({name:name}, function(err){
      if(err){console.log(err);}
    });
  },
  deleteAll: function(name){
    AuthorModel.find({name:name}).remove().exec();
  }
}

authorsController.index();
authorsController.show("Anna");
authorsController.delete("Guyface.");
authorsController.deleteAll("Guyface_Spawn");
authorsController.update("Anna","New_Guyface");
