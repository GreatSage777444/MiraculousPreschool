// script.js


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navbar ul');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loader").classList.add("hidden");
  }, 1500); // 0.8s fade-out
});
