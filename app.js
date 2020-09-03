/// Importing express and bodyParser from node_module.
const express = require("express");
const bodyParser = require("body-parser");
/// import the module locally using dirname.
const date = require(__dirname + "/date.js");


/// The express() function is a top-level function exported by the express module.
const app = express();

/// Empty array which will store notes once users creates some.
const notes = [];
const workNotes  = [];



/// Change view engine from pug to EJS. EJS will look for files we are trying to render in views directory.
app.set("view engine", "ejs");

/// Allows us to use bodyParser to tap in the input called newItem.
app.use(bodyParser.urlencoded({extended: true}));

/// tells express to use public to display static files.
app.use(express.static("public"))




app.get("/", function(req, res){

/// Using the module we imported at the top. Storing in a let day so we can use in res.render.
const day = date.getDate();

/// Looks inside the views folder and will render the list.ejs. first "notes" is the one in the list.ejs template and the second is the array.
res.render("list", {listTitle: day, notes: notes});
});



app.post("/", function(req, res){

/// Uses bodyParser to get user input and store it in note.
const note = req.body.newItem;

// console.log(req.body);

/// If list = to "Work" push note in to worknotes array and redirect to "/work"
  if (req.body.list === "Work") {
    workNotes.push(note);
    res.redirect("/work");

  } else {
/// Pushes the note user has created to the array notes.
    notes.push(note);
    res.redirect("/");
  };
});


app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", notes: workNotes});
});


app.get("/about", function(req, res){
  res.render("about");
});


/// Opens port 3000 and listens for requests.
app.listen(3000, function(){
  console.log("Server Is Running.");
});
