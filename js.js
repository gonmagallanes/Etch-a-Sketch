const container = document.querySelector("#container");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const resetButton = document.querySelector("#reset");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const valorInput = input.value;
  const numeroReal = parseFloat(valorInput);
  console.log(numeroReal);

  container.innerHTML = "";

  if (numeroReal <= 100) {
    for (let i = 1; i <= numeroReal; i++) {
      const columns = document.createElement("section");
      columns.setAttribute(
        "style",
        "display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;"
      );
      for (let i = 1; i <= numeroReal; i++) {
        const rows = document.createElement("div");
        rows.classList.add("paintBox");
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

    document.addEventListener("mousedown", () => {
      isMouseDown = true;
    });

    document.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    document.addEventListener("click", () => {
      click = true;
    });

    const allBoxes = document.querySelectorAll(".paintBox");

    resetButton.addEventListener("click", () => {
      allBoxes.forEach((box) => {
        box.setAttribute(
          "style",
          "display: flex; flex: 1; height: 100%; border: 1px solid black;"
        );
      });
    });

    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    }

    allBoxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        if (isMouseDown) {
          box.setAttribute(
            "style",
            `background-color: ${randomColor()}; display: flex; flex: 1; height: 100%; border: 1px solid black; opacity: 0.7;`
          );
        }
      });
    });

    allBoxes.forEach((box) => {
      box.addEventListener("click", () => {
        if (click) {
          box.setAttribute(
            "style",
            `background-color: ${randomColor()}; display: flex; flex: 1; height: 100%; border: 1px solid black;  opacity: 0.5;`
          );
        }
      });
    });
  } else {
    alert("cuidado boludito");
  }
});
