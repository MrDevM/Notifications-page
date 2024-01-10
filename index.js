const read = document.querySelector(".read");
const span = document.querySelector("span.no-notif");
const lis = document.querySelectorAll("li");
//
read.addEventListener("click", () => {
  for (li of lis) {
    const i = li.querySelector("i");
    if (i) {
      i.parentElement.removeChild(i);
    }
  }
  count();
});

//
function count() {
  const iss = document.querySelectorAll("i");
  span.textContent = iss.length;
  for (li of lis) {
    if (li.querySelector("i")) {
      li.classList.add("new");
    } else {
      li.classList.remove("new");
    }
  }
}
count();
const lin = document.querySelectorAll(".new");
lin.forEach((li) => {
  li.addEventListener("click", () => {
    if (li.querySelector("i")) {
      li.querySelector("i").remove();
    }
    li.classList.remove("new");
    count();
  });
});
