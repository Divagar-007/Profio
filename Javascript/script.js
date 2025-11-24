document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); 
      window.location.href = "./index.html"; // Redirect
    });
  });


 document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");

    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "../index.html";
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  const applyForm = document.getElementById("applyForm");

  applyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("🎉 Application Submitted Successfully!");

    window.location.href = "./jobs.html"; // Redirect back to jobs page
  });
});




