let Email = document.querySelector("#Mail");
let Password = document.querySelector("#Pass");
let Button = document.querySelector("#Btn");
let Alert = document.querySelector("#alert");

Button.addEventListener("click", (e) => {
  e.preventDefault();
  if (Password.value === "" || Password.value === null) {
    Alert.innerHTML = "Enter a Password";
  } else if (Email.value === "" || Email.value === null) {
    Alert.innerHTML = "Enter a Email";
  } else if (Password.value.length < 6) {
    Alert.innerHTML = "Password to small";
  } else if (Password.value.length > 20) {
    Alert.innerHTML = "Password to big";
  } else {
    Alert.innerHTML = "successfully logged in";
    location.assign("https://niveditha-portfolio.web.app/");
  }
  setTimeout(() => {
    Alert.innerHTML = "";
  }, 1000);
});
