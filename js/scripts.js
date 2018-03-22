$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).siblings().show();
  });
  $(".mine").click(function(){
    $(this).hide();
  });
});
