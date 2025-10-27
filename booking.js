document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const result = document.getElementById("bookingResult");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const car = document.getElementById("car").value;
    const date = document.getElementById("date").value;
    const days = document.getElementById("days").value;

    if (!name || !email || !car || !date || !days) {
      result.style.display = "block";
      result.style.color = "red";
      result.innerHTML = "⚠️ Please fill in all fields!";
      return;
    }

    // Booking ID generator
    const bookingId = "CW" + Math.floor(Math.random() * 1000000);

    result.style.display = "block";
    result.style.color = "#0f0";
    result.innerHTML = `
      ✅ Thanks <strong>${name}</strong>! Your <strong>${car}</strong> is booked for 
      <strong>${days}</strong> days starting from <strong>${date}</strong>.<br>
      Your booking reference: <strong>${bookingId}</strong>
    `;

    form.reset();
  });
});
