function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // Calculate the new cursor position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Get the screen dimensions and account for the bars
    const parentWidth = window.innerWidth;
    const parentHeight = window.innerHeight;
    const sidebarWidth = 160; // Width of the side bar
    const topbarHeight = 50; // Height of the top bar

    // Calculate new positions
    let newTop = elmnt.offsetTop - pos2;
    let newLeft = elmnt.offsetLeft - pos1;

    // Ensure the element stays within the adjusted boundaries
    newTop = Math.max(topbarHeight, Math.min(newTop, parentHeight - elmnt.offsetHeight));
    newLeft = Math.max(sidebarWidth, Math.min(newLeft, parentWidth - elmnt.offsetWidth));

    // Set the element's new position
    elmnt.style.top = newTop + "px";
    elmnt.style.left = newLeft + "px";
}



  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("catbox"));