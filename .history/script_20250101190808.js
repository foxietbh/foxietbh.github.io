function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

  function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      const parentWidth = window.innerWidth;
      const parentHeight = window.innerHeight;
      const sidebarWidth = 160; // Width of the side bar
      const topbarHeight = 50; // Height of the top bar

      let newTop = elmnt.offsetTop - pos2;
      let newLeft = elmnt.offsetLeft - pos1;

      newTop = Math.max(topbarHeight, Math.min(newTop, parentHeight - elmnt.offsetHeight));
      newLeft = Math.max(sidebarWidth, Math.min(newLeft, parentWidth - elmnt.offsetWidth));

      elmnt.style.top = newTop + "px";
      elmnt.style.left = newLeft + "px";
  }

  function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
  }
}

dragElement(document.getElementById("catbox"));
