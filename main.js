Tasks = new Mongo.Collection('tasks');
UserLevel = new Mongo.Collection('userLvl');
Statistic = new Mongo.Collection('statistic');

Meteor.startup( function(){
    if(Tasks.find().count()==0) {
      lvlListObjs.forEach(function(task,i,arr) {
        Tasks.insert( {level: task.level, levelKey : task.levelKey, imgSrc : task.imgSrc, taskText : task.taskText });
      });
    }
  }
);
