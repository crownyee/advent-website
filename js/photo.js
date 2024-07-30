function openModal(bus_) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");

  modal.style.display = "flex";
  modalImage.src = bus_.src;
}

window.onload = function() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
