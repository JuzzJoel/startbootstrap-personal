
function hideHiddenElements() {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(element => {
      element.style.display = "none";
    });
  }