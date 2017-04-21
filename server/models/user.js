// require mongoose
var mongoose = require('mongoose');
// create the schema
var UserSchema = new mongoose.Schema({
  email: {
    type:String,
    required:[true,"Email is required."],
    trim: true
  },

  first_name: {
    type:String,
    required:[true,"First name is required."],
    trim: true
  },

  last_name: {
    type:String,
    required:[true,"Last name is required."],
    trim: true
  },

  password: {
        type: String,
        required: true,    
        minlength: 8,
        maxlength: 32,
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation.  Must be between 8 and 32 characters,  you must have at least 1 number, uppercase and special character chosen from @$!%*?&]"
        },
        default:"$uperSecret123"
  },

  birthday: Date,

  date_created: {
    type:Date,
     default : Date.now
  },

  last_login: {
    type:Date,
     default : Date.now
  }
})
// register the schema as a model
var User = mongoose.model('User', UserSchema);