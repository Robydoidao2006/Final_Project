//requiring packages
const express= require ("express");
const bodyParser = require ("body-parser");
//requiring DB
const mongoose = require("mongoose");
//requiring routes
const routes = require("./routes");

//ruuning app with express
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
//changing code to json format
app.use(bodyParser.json());
//displaying static
app.use(express.static("client/build"));
//add routes
app.use(routes);

var databaseUri = "mongodb://localhost/project3";

if (process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
}
else{
  mongoose.connect(databaseUri);

}
// connect to Mango DB
var db = mongoose.connection;

db.once("open", ()=>{
  console.log("Mongoose db connected");
})
//app listening to the server.
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server listening on PORT ${PORT}!`);
});
