function hamburger(){
    var humb = document.getElementById("menu_box");
  if (humb.style.display === "block") {
    humb.style.display = "none";
  } else {
    humb.style.display = "block";
  }
}

function myFunction(x) {
    x.classList.toggle("change");
  }