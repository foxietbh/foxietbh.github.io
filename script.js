function dragElement(elmnt) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  const header = document.getElementById(elmnt.id + "header") || elmnt;

  // Remove CSS transform to avoid conflicts with JS positioning
  elmnt.style.transform = "none";

  // Set initial position if not already set
  if (!elmnt.style.left) elmnt.style.left = "100px";
  if (!elmnt.style.top) elmnt.style.top = "100px";

  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();

    // Bring to front
    elmnt.style.zIndex = 1000;

    // Store initial mouse position
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Attach event listeners
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();

    // Calculate mouse movement
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Use viewport dimensions since boxes are positioned relative to viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const topbarHeight = 50;

    // Calculate new position
    let newLeft = elmnt.offsetLeft - pos1;
    let newTop = elmnt.offsetTop - pos2;

    // Apply boundary constraints
    const elementWidth = elmnt.offsetWidth;
    const elementHeight = elmnt.offsetHeight;

    const minLeft = 0;
    const maxLeft = viewportWidth - elementWidth;
    const minTop = topbarHeight;
    const maxTop = viewportHeight - elementHeight;

    // Clamp values within boundaries
    newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
    newTop = Math.max(minTop, Math.min(newTop, maxTop));

    // Apply new position
    elmnt.style.left = newLeft + "px";
    elmnt.style.top = newTop + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Make both elements draggable
const menuBox = document.getElementById("menuBox");
const catbox2 = document.getElementById("catbox2");

if (menuBox) dragElement(menuBox);
if (catbox2) dragElement(catbox2);
