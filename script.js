addToDo.addEventListener("click", function () {
  if (input.value == "") {
    alert("BOS MADDE GIREMEZSINIZ");
  } else {
    list.innerHTML += `<li class='lili'>${input.value} <button class='X-Button' >X</button> </li>`;
    input.value = "";
  }
});

const ul = document.querySelector("ul");

ul.addEventListener("click", function (e) {
  if (e.target.innerHTML === "X") {
    e.target.parentElement.classList.toggle("d-none");
  }
  e.target.classList.toggle("text-decoration-line-through");
});

const toastTrigger = document.getElementById("addToDo");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
