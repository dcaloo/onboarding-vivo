const openDialog = document.getElementById("openDialog");
const closeDialog = document.getElementById("closeDialog");
const dialog = document.querySelector("dialog");

openDialog.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});