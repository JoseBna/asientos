document.getElementById('confirm').addEventListener('click', () => {
  if (!selectedSeat) {
    alert('Selecciona un asiento');
    return;
  }
  const nombre = prompt('Ingresa tu nombre');
  if (!nombre) {
    alert('Debes ingresar tu nombre');
    return;
  }

  // URL del Web App de Google Apps Script
  const url = 'TU_URL_DEL_WEB_APP';  // Reemplaza esto con la URL de tu Web App

  // Enviar los datos al Web App de Google Apps Script
  fetch(url, {
    method: 'POST',
    body: new URLSearchParams({
      nombre: nombre,
      asiento: selectedSeat
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.result === "success") {
        document.getElementById('mensaje').textContent = `✅ ${nombre}, tu asiento ${selectedSeat} ha sido registrado.`;
      } else {
        document.getElementById('mensaje').textContent = `❌ Hubo un error al registrar tu asiento.`;
      }
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = `❌ Error de red.`;
    });
});
