// login------------------------------------------------------------------

async function login(username, password) {
  console.log(username, password);
  const res = await fetch('http://localhost:8082/access/login', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username: username,
          password: password
      })
  });
  const json = await res.json();
  if (json.status) {
      localStorage.setItem("status", json.status);
      localStorage.setItem("username", json.username);
      localStorage.setItem("password", json.password);
      location.reload();
  } else {
      console.log("oof");
  }
}

function submitLogin() {
  var username = document.getElementById("popover-username").value;
  var password = document.getElementById("popover-password").value;
  if (username && password)
      login(username, password);
}

// logout------------------------------------------------------------------

function submitLogout() {
    if(localStorage.getItem('status'))
        localStorage.removeItem('status');
    if(localStorage.getItem('username'))
        localStorage.removeItem('username');
    if(localStorage.getItem('password'))
        localStorage.removeItem('password');
    location.reload();
}