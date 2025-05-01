// console.log("login.js loaded");

document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;

  //   console.log(phoneNumber);
  //   console.log(pinNumber);

  if (phoneNumber === "" || pinNumber === "") {
    alert("Please fill in all fields");
    return;
  }

  if (phoneNumber === "01600201234" && pinNumber === "1234") {
    alert("Login successfully done!");
    window.location.href = "home.html";
  } else {
    alert("Login failed! Please check you phone number and pin");
  }
});
