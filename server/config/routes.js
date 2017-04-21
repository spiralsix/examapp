// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var UserController = require('../../server/controllers/UserController.js');
var dBTest = mongoose.model('DBTest');
var path = require("path"); 

module.exports = function(app) {
  
  //TEST ROUTE
  app.get('/unlikelyRoute', function(req, res) {
    dBTest.create({"won":String,2:Number},(err,testData)=>{
        dBTest.find({}, function (err, testdata){
        res.json( {testData:testData,err:err} );  
        });
    })
  })

 // API ROUTES
  app.get('/user/:email',  UserController.findOne );
  app.get('/users/',  UserController.show );
  app.post('/users/new',  UserController.create );
  app.put('/users/',  UserController.update );
  app.delete('/users/:id',  UserController.delete );
 
//  Default to angular
  app.get('*', function (req, res) {
         res.sendFile(path.resolve('public/widget-app/dist/index.html'));
 })
}
