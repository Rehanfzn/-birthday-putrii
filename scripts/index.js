// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "11042005" && password === "23052005") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang sengg",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Coba cek lagi username sama passwordnya ya:)",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}

// Arrow animation
function animateArrows() {
  const leftBow = document.querySelector('.left-bow');
  const rightBow = document.querySelector('.right-bow');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const fireworks = document.querySelector('.fireworks');

  // Timeline for animation
  const tl = gsap.timeline();

  // Show bows
  tl.to([leftBow, rightBow], { opacity: 1, duration: 0.5 });

  // Show arrows and shoot them to center
  tl.to([leftArrow, rightArrow], { opacity: 1, duration: 0.2 }, "-=0.3");
  tl.to(leftArrow, { y: -window.innerHeight / 2 + 100, x: window.innerWidth / 2 - 100, rotation: 45, duration: 1, ease: "power2.out" }, "-=0.2");
  tl.to(rightArrow, { y: -window.innerHeight / 2 + 100, x: -(window.innerWidth / 2 - 100), rotation: -45, duration: 1, ease: "power2.out" }, "-=1");

  // Change arrows to hearts
  tl.call(() => {
    leftArrow.textContent = '💖';
    rightArrow.textContent = '💖';
    leftArrow.style.fontSize = '24px';
    rightArrow.style.fontSize = '24px';
  }, [], "-=0.5");

  // Create fireworks
  tl.call(() => {
    for (let i = 0; i < 30; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      fireworks.appendChild(firework);

      const angle = (i / 30) * Math.PI * 2;
      const distance = Math.random() * 120 + 60;

      gsap.fromTo(firework, 
        { x: 0, y: 0, opacity: 1, scale: 0, rotation: 0 },
        { 
          x: Math.cos(angle) * distance, 
          y: Math.sin(angle) * distance, 
          opacity: 0, 
          scale: Math.random() * 2 + 1,
          rotation: Math.random() * 360,
          duration: 1.5, 
          ease: "power2.out",
          backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
        }
      );
    }
  });

  // Hide bows and arrows after animation
  tl.to([leftBow, rightBow, leftArrow, rightArrow], { opacity: 0, duration: 0.5 }, "+=1");
}

// Run animation on page load
window.addEventListener('load', () => {
  setTimeout(animateArrows, 1000); // Delay 1 second
});