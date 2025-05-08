console.log("script.js is loaded!");
function openEnvelope() {
  console.log("Button clicked!");
  const envelope = document.getElementById("envelope");
  const button = document.querySelector(".open-btn"); // Select the button
  if (envelope) {
    envelope.classList.add("open"); // Add the 'open' class to trigger animations
  }
  if (button) {
    button.style.opacity = "0"; // Fade out the button
    setTimeout(() => button.style.display = "none", 1000); // Remove the button after fading
  }
}