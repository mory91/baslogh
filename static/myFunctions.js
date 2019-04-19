function showHistory () {

  if (document.getElementById("history").style.display == 'none') {
    var history = document.getElementById("history");
    history.style.display = "block";

    var show = document.getElementById("show");
    show.classList.remove("fa-caret-square-o-down");
    show.classList.add("fa-caret-square-o-up");
  }
  else {
    var history = document.getElementById("history");
    history.style.display = "none";

    var show = document.getElementById("show");
    show.classList.remove("fa-caret-square-o-up");
    show.classList.add("fa-caret-square-o-down");

  }
}
