const loadPopoverContent = (url, popoverVisible) => {
  $.ajax({
    url: url,
    method: "GET",
    success: function (data) {
      // Destroy any existing popover to prevent issues
      $("#loginButton").popover("dispose");

      // Create the popover with the loaded content
      $("#loginButton").popover({
        content: data,
        placement: "bottom",
        html: true,
        trigger: "manual",
        sanitize: false,
      });

      // Show the popover
      if (popoverVisible) $("#loginButton").popover("show");

      // Attach event listeners for switch buttons
      $(document)
        .off("click", "#switch-to-register")
        .on("click", "#switch-to-register", function () {
          popoverVisible = true;
          loadPopoverContent("ajax/register.ejs", popoverVisible);
        });
      $(document)
        .off("click", "#switch-to-login")
        .on("click", "#switch-to-login", function () {
          popoverVisible = true;
          loadPopoverContent("ajax/login.ejs", popoverVisible);
        });
    },
    error: function () {
      console.error("Failed to load the form content");
    },
  });
};

$(document).ready(async function () {
  var status = null;
  if (localStorage.getItem("username") && localStorage.getItem("password")){
    const json = await loginCheck(localStorage.getItem("username"), localStorage.getItem("password"));
    if(json) status=json.status;
  }

  var popoverVisible = false;

  // Load the initial popover content
  loadPopoverContent(status?"ajax/logout.ejs":"ajax/login.ejs", popoverVisible);

  // Toggle the popover on button click
  $("#loginButton").click(function () {
    if (popoverVisible) {
      $("#loginButton").popover("hide");
    } else {
      $("#loginButton").popover("show");
    }
    popoverVisible = !popoverVisible;
  });

  if(!status) $("#cart").hide();



});
