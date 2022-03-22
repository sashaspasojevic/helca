// mobile menu drop down

let burger = document.querySelector(".burger");
let drop_down = document.querySelector(".drop_down");

window.addEventListener("click", show_menu);

// detect scrooll

window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  if (window.scrollY > 66) {
    //     console.log("Otisla navigacija");
    burger.classList.add("burger_fix");
  } else {
    burger.classList.remove("burger_fix");
  }
});

function show_menu(e) {
  let clickedItem = e.target;
  if (clickedItem.classList.contains("burger")) {
    drop_down.classList.toggle("show_menu");
  } else {
    drop_down.classList.remove("show_menu");
  }
}
