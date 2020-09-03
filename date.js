/// We are exporting the function and binding it with .getDate.
exports.getDate = function(){

/// gets date e.g 2020-08-24.
const today = new Date();

/// Object which formats the date to different preferences.
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

/// Converts date to a string using operating system locale conventions.
return today.toLocaleDateString("en", options);


}
