// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Modal para la prueba gratis.

document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("myModal");
  const cancelBtn = document.getElementById("cancelBtn");
  const statusMessage = document.getElementById("statusMessage");
  const form = document.querySelector("form");

  openModalBtn.addEventListener("click", function () {
      resetModal();
      modal.style.display = "block";
  });

  cancelBtn.addEventListener("click", function () {
      modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });

  form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Simula un envío de formulario (puedes agregar aquí tu lógica de envío real)
      setTimeout(function () {
          statusMessage.textContent = "Mensaje enviado con éxito.";
          setTimeout(function () {
              modal.style.display = "none";
              resetModal();
          }, 2000);
      }, 1000);
  });

  function resetModal() {
      // Restablece el contenido del modal
      form.reset(); // Restablece los campos del formulario
      statusMessage.textContent = ""; // Limpia cualquier mensaje de estado anterior
  }
});
