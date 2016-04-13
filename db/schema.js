var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/reminders");

var db = mongoose.connection;

db.on("err",function(err){
  console.log(err);
});

db.once("open",function(){
  console.log("db was connected");
});

var Schema = mongoose.Schema;

var RemindersSchema = new Schema({
  body: String
});

var AuthorsSchema = new Schema({
  name: String,
  reminders: [RemindersSchema]
});

var ReminderModel = mongoose.model("Reminder", RemindersSchema);
var AuthorModel = mongoose.model("Author", AuthorsSchema);

module.exports = {
  ReminderModel: ReminderModel,
  AuthorModel: AuthorModel
}
