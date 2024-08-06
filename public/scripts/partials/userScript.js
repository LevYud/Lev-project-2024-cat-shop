// login------------------------------------------------------------------

async function loginCheck(username, password) {
  const res = await fetch("http://localhost:8082/user/loginCheck", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const json = await res.json();
  if (json.status && json.status && json.username && json.password) {
    return json;
  } else {
    return null;
  }
}

async function submitLogin() {
  var username = document.getElementById("popover-username").value;
  var password = document.getElementById("popover-password").value;
  if (username && password) {
    const json = await loginCheck(username, password);
    if (json) {
      localStorage.setItem("username", json.username);
      localStorage.setItem("password", json.password);
      location.reload();
    } else console.log("no no");
  }
}

// logout------------------------------------------------------------------

function submitLogout() {
  if (localStorage.getItem("username")) localStorage.removeItem("username");
  if (localStorage.getItem("password")) localStorage.removeItem("password");
  location.reload();
}

// Register------------------------------------------------------------------

async function register(username, password, email, phone, address) {
  const res = await fetch("http://localhost:8082/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
      phone: phone,
      address: address,
    }),
  });
  const json = await res.json();
  if (json.status && json.status && json.username && json.password) {
    return json;
  } else {
    return null;
  }
}

async function submitRegister() {
  var username = document.getElementById("register-username").value;
  var password = document.getElementById("register-password").value;
  var email = document.getElementById("register-email").value;
  var phone = document.getElementById("register-phone").value;
  var address = document.getElementById("register-address").value;
  if (username && password && email && phone && address) {
    const json = await register(username, password, email, phone, address);
    if (json) {
      localStorage.setItem("username", json.username);
      localStorage.setItem("password", json.password);
      location.reload();
    } else console.log("no no");
  }
}
