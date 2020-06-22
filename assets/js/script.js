var today = moment().format('MMMM Do YYYY'); 
var currentTime = moment().format('HH:mm')

$(document).ready(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm'));


 });
  var compareTime = function() {
      $(".time-block").each(function() {
          var currentTime = $(this).attr("id").split('-')[1]
          console.log(currentTime)
          
      });
  }



    $(".saveBtn").click(function(){
        var hour1 = $(".description")
        .val()
        .trim()        
        localStorage.setItem("description",hour1)        
    })



