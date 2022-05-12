// Log the current dat, month and date in the header
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Global variables
var textareaSections = $("textarea");
var currentHour = moment().hour();
var saveBtn = $(".saveBtn");

// for loop to check the current time and color code the timeblock according to past, present, and future.
for (let i = 0; i < textareaSections.length; i++) {
  var timeBlockHour = $(textareaSections[i]).attr("id");
  if (timeBlockHour < currentHour) {
    $(textareaSections[i]).addClass("past");
  } else if (timeBlockHour == currentHour) {
    $(textareaSections[i]).addClass("present");
  } else {
    $(textareaSections[i]).addClass("future");
  }

//   console.log($(textareaSections[i]).attr("id"));
}
// console.log(moment().hour())

// save button functionality to save to local storage from
saveBtn.on("click", function () {
  var time = $(this).siblings(".description").attr("id");
  var userText = $(this).siblings(".description").val();
  localStorage.setItem(time, userText);
});

var memory = function () {
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
};
memory();
