document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const voterId = document.getElementById("voter-id").value;
  const password = document.getElementById("password").value;

  if (voterId === "admin" && password === "admin123") {
    alert("Logged in as Admin");
    window.location.href = "admin.html";
  } else if (voterId && password) {
    alert("Logged in as Voter");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
});
