function resizeTextarea() {
  let screensize = screen.width;
  let textArea = document.getElementById('message');
  if(screensize <= 768) {
    textArea.setAttribute("cols", "40")
  } else {
    textArea.setAttribute("cols", "60")
  }
}


window.onload = function() {
  resizeTextarea()
}

window.addEventListener("resize", resizeTextarea);