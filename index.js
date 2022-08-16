let item;

document.addEventListener("dragstart", (e) => {
  item = e.target;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  if (e.target.classList.value === "target") {
    e.preventDefault(e);
    e.target.appendChild(item);
    item = null;
  }
});
