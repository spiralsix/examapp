// require mongoose
var mongoose = require('mongoose');
// create the schema
var DBTestSchema = new mongoose.Schema({
  one: String,
  two: Number
})
// register the schema as a model
var DBTest = mongoose.model('DBTest', DBTestSchema);