const asientoLista = [
  "A1","A2","A3","A4","A5","A6","A7",
  "B1","B2","B3","B4","B5","B6","B7",
  "C1","C2","C3","C4","C5","C6","C7",
  "D1","D2","D3","D4","D5","D6","D7",
  "E1","E2","E3","E4","E5","E6","E7",
  "F1","F2","F3","F4",
  "G1","G2","G3","G4","G5","G6","G7","G8","G9",
  "H1","H2","H3","H4","H5","H6","H7","H8","H9",
  "I1","I2","I3","I4","I5","I6","I7","I8","I9",
  "J1","J2","J3","J4","J5","J6","J7",
  "K1","K2","K3","K4","K5","K6",
  "L1","L2","L3","L4","L5","L6",
  "M1","M2","M3","M4","M5","M6",
  "N1","N2","N3","N4","N5","N6",
  "O1","O2","O3","O4","O5","O6","O7","O8","O9",
  "P1","P2","P3","P4","P5","P6","P7","P8","P9",
  "Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9",
  "R1","R2","R3","R4","R5","R6","R7","R8","R9"
];

// Agrupar por letra
const grupos = {};
asientoLista.forEach(asiento => {
  const fila = asiento[0];
  if (!grupos[fila]) {
    grupos[fila] = [];
  }
  grupos[fila].push(asiento);
});

const seatMap = document.getElementById('seat-map');

// Crear visualmente por fila
for (const fila in grupos) {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');

  grupos[fila].forEach(asiento => {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.dataset.seat = asiento;
    seat.textContent = asiento;
    rowDiv.appendChild(seat);
  });

  seatMap.appendChild(rowDiv);
}

let selectedSeat = null;
document.querySelectorAll('.seat').forEach(seat => {
  seat.addEventListener('click', () => {
    document.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));
    seat.classList.add('selected');
    selectedSeat = seat.dataset.seat;
  });
});

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

  // Aquí se podría conectar a Google Sheets
  console.log(`Enviar a Sheets: ${nombre} eligió ${selectedSeat}`);
  document.getElementById('mensaje').textContent = `✅ ${nombre}, tu asiento ${selectedSeat} ha sido registrado (simulado).`;
});