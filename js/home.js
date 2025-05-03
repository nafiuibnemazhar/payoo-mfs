// console.log("home js added");

document
  .getElementById("btn-add-money")
  .addEventListener("click", function name(e) {
    e.preventDefault();

    const addMoneyInput = document.getElementById("input-add-money").value;
    const inputPinNumber = document.getElementById("input-pin-number").value;

    if (inputPinNumber === "1234") {
      console.log("Adding money to account");

      const balance = document.getElementById("account-balance").innerText;
      const newBalance = parseFloat(balance) + parseFloat(addMoneyInput);
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money to account. Please try afain!!!");
    }
  });
