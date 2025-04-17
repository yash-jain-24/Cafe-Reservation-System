const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://YashJain:jainyash24@cluster1.x4ktj7g.mongodb.net/?retryWrites=true&w=majority/CoffeeCulture", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we are connected");
});

// //schema
var userSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});
var User = mongoose.model("User", userSchema);
module.exports.User = User;



var signupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});
var Signup = mongoose.model("Signup", signupSchema);
module.exports.Signup = Signup;



var loginSchema = new mongoose.Schema({
  lusername: {
    type: String,
    required: true,
  },
  lpassword: {
    type: String,
    required: true,
  }
});
var Login = mongoose.model("Login", loginSchema);
module.exports.Login = Login;
