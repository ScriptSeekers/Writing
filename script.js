function toggle(btn) {
  const content = btn.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
  btn.innerText = content.style.display === "block" ? "Hide" : "Read";
  
  // Smooth scroll to show more content on mobile
  if (content.style.display === "block" && window.innerWidth < 768) {
    content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function goTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}

// Improve mobile experience
document.addEventListener('DOMContentLoaded', function() {
  // Add touch feedback for buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.98)';
    });
    btn.addEventListener('touchend', function() {
      this.style.transform = 'scale(1)';
    });
  });
});
