function showHistory() {
  var history = document.getElementById("history");
  var show = document.getElementById("show");
  if(history.style.display=="none"){
    history.style.display = "block";
    show.classList.remove("fa-caret-square-o-down")
    show.classList.add("fa-caret-square-o-up")
  }
  else {
    history.style.display = "none";
    show.classList.remove("fa-caret-square-o-up")
    show.classList.add("fa-caret-square-o-down")
  }
}
