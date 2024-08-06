const currentURL =()=>{
  if (localStorage.getItem('status'))
    return 'ajax/logout.ejs'
  return 'ajax/login.ejs'
}

$(document).ready(function () {
  var popoverVisible = false;

  // Load the popover content from an external file using AJAX
  $.ajax({
    url: currentURL(),
    method: "GET",
    success: function (data) {
      $("#loginButton").popover({
        content: data,
        placement: "bottom",
        html: true,
        trigger: "manual",
        sanitize: false,
      });
    },
    error: function () {
      console.error("Failed to load the form content");
    },
  });

  // Toggle the popover on button click
  $("#loginButton").click(function () {
    if (popoverVisible) {
      $("#loginButton").popover("hide");
    } else {
      $("#loginButton").popover("show");
    }
    popoverVisible = !popoverVisible;
  });
});
