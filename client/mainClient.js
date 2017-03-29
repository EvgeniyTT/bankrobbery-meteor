Handlebars.registerHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});

// ------------------ACCOUNT------------------------
  Accounts.ui.config({
	  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
	});
// ------------------ACCOUNT END------------------------


// ------------------PROLOGUE------------------------
  Template.prologue.helpers({imgSrc:"level0.jpg"});

  // Template.prologue.events({
  //   'click .js-Im-in' : function(event) {
  //     if(Meteor.user()){
  //       var prologueDiv = document.querySelector('.prologue');
  //       var taskDiv = document.querySelector('.tasks');
  //       prologueDiv.style.display='none';
  //       taskDiv.style.display='block';
  //     } else {
  //       alert('Please log in');
  //     }
  //   }
  // });
// ------------------PROLOGUE END------------------------


// ------------------mainTask TEMPLATE------------------------
  Template.mainTask.helpers({
    imgSrc: function() {
      if(Meteor.user()) {
        if(UserLevel.findOne({user: Meteor.user().username})) {
          var userLvl = UserLevel.findOne({user: Meteor.user().username}).userLvl;
          return Tasks.findOne({level: userLvl}).imgSrc;
        } else {
            return Tasks.findOne({level:1}).imgSrc;
        }
      }
    },
    taskText: function() {
      if(Meteor.user()){
        if(UserLevel.findOne({user: Meteor.user().username})) {
          var userLvl = UserLevel.findOne({user: Meteor.user().username}).userLvl;
          return Tasks.findOne({level: userLvl}).taskText;
        } else {
            return Tasks.findOne({level:1}).taskText;
        }
      }
    },
    endBool: function() {
      if(Meteor.user()) {
        if (UserLevel.findOne({user: Meteor.user().username})) {
        var userLvl = UserLevel.findOne({user: Meteor.user().username}).userLvl;
        }
      }
      if ( userLvl == 12) {
          return true;
        } else {
          return false;
        }
    }
  });

  Template.mainTask.events({
    'click .js-submit' : function(event) {
      var levelKey = document.querySelector('#keyLevel')
      var errorText = document.querySelector('.error');
      var levelVal = levelKey.value;
      if(levelVal){
        errorText.innerText = "";
        if( Tasks.findOne({levelKey: levelVal}) ) {
          if ( UserLevel.findOne({user: Meteor.user().username}) ) {
            var userLvlId =  UserLevel.findOne( {user: Meteor.user().username})._id;
            var userLvl = UserLevel.findOne({user: Meteor.user().username}).userLvl;
            var levelNumber = Tasks.findOne({levelKey: levelVal}).level;
            if(levelNumber > userLvl+1) {
              errorText.innerText = "You should follow the order. Please don't cheat and enter the Level Key of the NEXT level";
            } else if (levelNumber <= userLvl) {
              errorText.innerText = "You entered a key of the level you have already passed."+
              " If you want to take it one more time - you have to create a new user";
            } else {
              UserLevel.update({_id: userLvlId}, {$set: {userLvl: userLvl+1}});
              Statistic.insert({userLvl: userLvl, userName: Meteor.user().username, time: new Date()})
            }
          } else if (Tasks.findOne({levelKey: levelVal}).levelKey === 'QT9684jguuth5s') {
            UserLevel.insert({user: Meteor.user().username, userLvl: 2});
            Statistic.insert({userLvl: 1, userName: Meteor.user().username, time: new Date()})
          } else {
            errorText.innerText = "Да щас!"
          }
          levelKey.value="";
        } else {
          errorText.innerText = "It's a wrong key";
        }
      } else {
          errorText.innerText = 'Please populate Level Key field';
      }
    }
  });
// ------------------mainTask TEMPLATE END------------------------

// ------------------Statistic TEMPLATE------------------------

Template.statistic.helpers({
  statRow: function() {
    return Statistic.find({},{sort:{userLvl: -1, time: 1}});
  }
});

// ------------------Statistic TEMPLATE END------------------------
