document.getElementById("button-login").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("login button clicked");

  const phoneNumber = document.getElementById("phone-number").value;
  console.log(phoneNumber);
});
