// variables
var today = moment().format('MMMM Do YYYY, HH:mm'); 
var currentTime = moment().format('HH')
var currentTimeInt = parseInt(currentTime, 10);
    $("#currentDay").text(today);

$(document).ready(function(){
    loadTasks();
    compareTime();
});

// function to compare time of task to current time
  var compareTime = function() {
      $(".time-block").each(function() {

          var taskTime = $(this).attr("id").split('-')[1]
          var taskTimeInt = parseInt(taskTime, 10);
          if (taskTimeInt <= currentTimeInt) {
              $(this).removeClass('present')
              $(this).removeClass('future')
              $(this).addClass('past')          
        }else if (taskTimeInt === currentTimeInt) {
            $(this).removeClass('future')
            $(this).removeClass('past')
            $(this).addClass('present')
      }else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      };
  })
};

// save task
    $(".saveBtn").click(function(){
        var taskTime = $(this).data('hour');
        var taskDesc = $(`#toDoItem-${taskTime}`).val().trim();
            localStorage.setItem(`${taskTime}-block`, taskDesc);     
    })

function loadTasks() {
    $('.time-block').each(function(){
        var taskTime = $(this).attr("id").split('-')[1];
        var taskDesc = localStorage.getItem(`${taskTime}-block`);
        $(this).find('.description').val(taskDesc);
    });
}

        
    


