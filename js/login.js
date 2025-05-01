// console.log("login.js loaded");

document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const phoneNumber = document.getElementById("phone-number").value;
  console.log(phoneNumber);
});
