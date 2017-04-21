var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  

  update: function(req, res) {
    console.log("in UsersController => update req.params", req.body)
    User.update({_id:req.body._id}, req.body, function(err,data){
      if(err){
        console.log("something went wrong in update","\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++\n",err);
      } else {
        res.json(true);
      }
    });  
  },

  show: function(req, res) {
    console.log("userController => show");
    
    User.find({}, function(err, users) {
     if(err){
        console.log("Something went wrong in userController show","\n========================================================\n",err);
      } else {
        res.json({data:users});
      }
    })
    
   
  },

  findOne: function(req,res) {
    console.log("userController => show");
    var email = req.params.email;
    User.findOne({email}, function(err, user) {
     if(err){
        console.log("Something went wrong in userController show","\n========================================================\n",err);
      } else {

        
        console.log("Something went right in userController show",typeof user,user)
        res.json({user:user});
      }
    })
  },

  delete: function(req, res) {
    console.log("in UsersController => delete req.params", req.params)
    User.remove({_id:req.params.id},function(err){
      if(err){
        console.log("something went wrongdelete","\n========================================================\n",err);
      } else {
       console.log("Delete may have suceeded.");
         res.json(true);
       }
    });
  },

  create: function(req, res) {
    console.log("in UsersController => create",req.body)
    delete req.body._id
     console.log("in UsersController => create",req.body)
  var user = new User(req.body);
      console.log("the user we are trying to create is: ",user)
      user.save(
        function(err,data) {
        if(err){
        console.log("something went wrongcreate","\n========================================================\n",err);
        } else {
          console.log("something went rightcreate","\n========================================================\n",err,data);
          res.json(true);
        }
      })
     // User.create(function(err,data) {
      // if(err){
      //   console.log("something went wrongcreate","\n========================================================\n",err);
      // } else {
      // console.log("something went rightcreate","\n========================================================\n",err,data);
      //    res.json(true);
      //  }
   // })

  }
}