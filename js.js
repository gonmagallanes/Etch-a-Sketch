const container = document.querySelector("#container");
const input = document.querySelector("#input");
const button = document.querySelector("#button");

for (let i = 1; i <= 16; i++) {
  const columns = document.createElement("section");
  columns.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;"
  );
  for (let i = 1; i <= 16; i++) {
    const rows = document.createElement("div");
    rows.setAttribute(
      "style",
      " display: flex; flex: 1; height: 100%; border: 1px solid black;"
    );
    columns.appendChild(rows);
  }
  container.appendChild(columns);
  container.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center; border: 1px solid black; margin: 5px; width: 500px; height: 500px; flex-direction: column;"
  );
  document.body.appendChild(container);
}

function agregarClase() {}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ BOTON PARA AGREGAR LA CANTIDAD QUE QUIERAS DE DIVS

// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   const valorInput = input.value;
//   const numeroReal = parseFloat(valorInput);
//   console.log(numeroReal);

//   container.innerHTML = "";

//   for (let i = 1; i <= numeroReal; i++) {
//     const columns = document.createElement("section");
//     for (let i = 1; i <= numeroReal; i++) {
//       const rows = document.createElement("div");
//       rows.setAttribute(
//         "style",
//         `display: flex; width:50px; height: 50px; ;justify-content: center; border: 1px solid black; align-items: center`
//       );
//       columns.appendChild(rows);
//     }

//     container.appendChild(columns);
//     document.body.appendChild(container);
//   }
// });
