# Profio
This is my Website
/* ===== Animated Background ===== */
body {
  background: linear-gradient(-45deg, #0073b1, #00bfae, #9b59b6, #f39c12);
  background-size: 400% 400%;
  animation: gradientShift 12s ease infinite;
  color: #2c3e50;
  font-family: "Poppins", sans-serif;
}

/* Smooth background gradient animation */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* ===== Button Hover Bounce ===== */
.btn {
  background-color: #9b59b6;
  color: #fff;
  border: none;
  padding: 12px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;
}

.btn:hover {
  background-color: #f39c12;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 5px 15px rgba(243, 156, 18, 0.3);
}

/* ===== Connection Item Animation ===== */
li {
  background: #ffffffcc;
  padding: 12px 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.4s ease forwards;
}

/* Fade & slide animation */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== Remove Button Shake ===== */
.remove-btn {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;
}

.remove-btn:hover {
  background-color: #c0392b;
  animation: shake 0.3s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
}
