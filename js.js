const container = document.querySelector("#container");
const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const valorInput = input.value;
  const numeroReal = parseFloat(valorInput);
  console.log(numeroReal);


  container.innerHTML = "";

  for (let i = 1; i <= numeroReal; i++) {
    const columns = document.createElement("section");
    for (let i = 1; i <= numeroReal; i++) {
      const rows = document.createElement("div");
      rows.setAttribute(
        "style",
        `display: flex; width:50px; height: 50px; ;justify-content: center; border: 1px solid black; align-items: center`
      );
      columns.appendChild(rows);
    }
    
    container.appendChild(columns);
    document.body.appendChild(container);
  }
});
