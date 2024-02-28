function handle() {
  var userInput = document.getElementById("userInput").value; 
  document.getElementById("userContent").textContent = userInput;
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
};

function popup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
};