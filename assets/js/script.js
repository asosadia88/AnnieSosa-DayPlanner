// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentDayEl = $("#currentDay");
  var currentDayTime = dayjs().format("dddd, MMMM D");
  var saveBtn = $(".saveBtn");

  currentDayEl.text (currentDayTime);

  var currentHour = dayjs().hour();
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  /* Loop to check present or future*/
  for (let i=9; i<18 i++) {
    var hour = $("hour-"+i);
    var event = localStorage.getItem("hour-"+i);
    hour.children("textarea").val(event);
    if(i === currentHour) {
      hour.addClass("present");
    }
    else if (i< currentHour) {
      hour.addClass("past");
    }
    else if (i > currentHour){
      HTMLPictureElement.addClass("future");
    }
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function saveEvent(event){
    var clickedButton = $ (event.target);
    var textArea=clickedButton.find("textarea");
    var timeId = clickedButton.parent().attr("id");

  localStorage.setItem(timeId, textArea.val());
  }

  saveBtn.on("click", saveEvent) 

});
