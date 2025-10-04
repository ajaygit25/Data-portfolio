// Simple contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formStatus").innerText = "✅ Message sent successfully!";
  this.reset();
});
