$(document).ready(function(){
    var popoverVisible = false;
  
    // Create the popover
    $('#loginButton').popover({
      content: function() {
        return $('#loginFormContent').html();
      },
      placement: 'bottom',
      html: true,
      trigger: 'manual',
      sanitize: false
    });
  
    // Toggle the popover on button click
    $('#loginButton').click(function() {
      if (popoverVisible) {
        $('#loginButton').popover('hide');
      } else {
        $('#loginButton').popover('show');
      }
      popoverVisible = !popoverVisible;
    });
  });

