// ir a otra pagina
function goToPage(url) {
    window.location.href = url;
}

// efecto imagenes
function zoomIn(element) {
    element.style.transform = "scale(0.9)";
}
  
function zoomOut(element) {
  element.style.transform = "scale(1.0)";
}


// formulario enviar contacto
function sendForm(event) {
  event.preventDefault();

  // Obtener los valores ingresados por el usuario
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false; // Evita que el formulario se envíe
  }
   // Enviar a el modal
  openModal(name, email, message);
  return false;
}

// abrir modal
function openModal(name, email, message) {

  document.getElementById("modalName").innerHTML = "<strong>Nombre:</strong> " + name;
  document.getElementById("modalEmail").innerHTML = "<strong>Email:</strong> " + email;
  document.getElementById("modalMessage").innerHTML =  message;

  let modal = document.getElementById("modal");
  modal.style.display = "block";
  document.getElementById("modalMessage").disabled = true;
}


function closeModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
  document.getElementById("myForm").reset();
}


// Asignar la función sendForm al evento submit del formulario
document.getElementById("myForm").addEventListener("submit", sendForm);

  