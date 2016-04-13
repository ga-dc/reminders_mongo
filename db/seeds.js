var Schema = require("../db/schema.js")

var AuthorModel = Schema.AuthorModel;
var ReminderModel = Schema.ReminderModel;
AuthorModel.remove({}, function(err){
  if(err){console.log(err);}
});

var anna = new AuthorModel({name:"Anna"});
var reminder1 = new ReminderModel({body: "Get less pants."});
var dudeface = new AuthorModel({name:"Dudeface"});
var reminder2 = new ReminderModel({body: "Find Guyface."});
var reminder3 = new ReminderModel({body: "Destroy Guyface."});
var guyface = new AuthorModel({name: "Guyface."});
var reminder4 = new ReminderModel({body: "Get more pants."});
var guyfaceSpawn1 = new AuthorModel({name: "Guyface_Spawn"});
var guyfaceSpawn2 = new AuthorModel({name: "Guyface_Spawn"});
var guyfaceSpawn3 = new AuthorModel({name: "Guyface_Spawn"});

anna.reminders.push(reminder1);
dudeface.reminders.push(reminder2);
dudeface.reminders.push(reminder3);
guyface.reminders.push(reminder4);

dudeface.save();
guyface.save();
guyfaceSpawn1.save();
guyfaceSpawn2.save();
guyfaceSpawn3.save();
anna.save(function(err, person){
  if(err){
    console.log(err);
  } else {
    console.log(person.name + " saved successfully!")
  }
});
