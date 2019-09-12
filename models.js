const mongoose = require("mongoose");// import Mongoose
mongoose.connect("mongodb://localhost/helloMongoose_db", {useNewUrlParser: true});// establish connection to desired database


const UserSchema = new mongoose.Schema({// UserSchema is an instance of mongoose.Schema
    name: String,
    age: Number,
}, {timestamps:true});
// .Schema is an object constructor and acts as a blueprint for making Documents.
// The object passed to it is how new Documents will be formatted.

const User = mongoose.model('User', UserSchema);
// The .model() method will create a Collection and assign the first argument as the
// name of that Collection *even plural them*. And the Schema we pass it will be turned
// into Documents for that Collection. Also, the User constant will become a constructor
// for those Documents.

module.exports = User;
// Export anything in this .exports object to another file "requiring" this file