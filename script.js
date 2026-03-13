const GlobalLateralOffset = 30;
let boxCounter = 0;
let linkBoxActive = false;
let galleryBoxActive = false;
let thoughtsBoxActive = false;
let todoBoxActive = false;

// ------------------ MOBILE DETECTION ------------------

function isMobile() {
  return window.innerWidth <= 768 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ------------------ DRAG FUNCTION ------------------

function dragElement(elmnt) {
  // Skip dragging on mobile
  if (isMobile()) {
    return;
  }

  const boxPositions = {
    menuBox: { top: "70px", left: GlobalLateralOffset + "px" },
    catbox: {
      top: "70px",
      left: window.innerWidth - elmnt.offsetWidth - GlobalLateralOffset + "px",
    },
  };

  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  const header =
    document.getElementById(elmnt.id + "Header") ||
    document.getElementById(elmnt.id + "header") ||
    elmnt;

  // --- INITIAL POSITION ---
  if (boxPositions[elmnt.id]) {
    elmnt.style.top = boxPositions[elmnt.id].top;
    elmnt.style.left = boxPositions[elmnt.id].left;
  } else {
    elmnt.style.top = elmnt.style.top || "100px";
    elmnt.style.left = elmnt.style.left || "100px";
  }

  // Remove transform conflicts
  elmnt.style.transform = "none";

  // --- PREVENT DRAG WHEN CLICKING INPUTS/BUTTONS ---
  header.querySelectorAll("input, button, textarea").forEach((el) => {
    el.onmousedown = (e) => e.stopPropagation();
  });

  // --- DRAG HANDLER ---
  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    elmnt.style.zIndex = 1000;

    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let newLeft = elmnt.offsetLeft - pos1;
    let newTop = elmnt.offsetTop - pos2;

    const maxLeft = window.innerWidth - elmnt.offsetWidth;
    const maxTop = window.innerHeight - elmnt.offsetHeight;
    const minTop = 50; // topbar height

    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    newTop = Math.max(minTop, Math.min(newTop, maxTop));

    elmnt.style.left = newLeft + "px";
    elmnt.style.top = newTop + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// ------------------ CREATE LINKS BOX ------------------

function createLinksBox() {
  // Check if already active
  if (linkBoxActive) return;

  const mainContainer = document.querySelector(".main");
  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.id = "linksBox" + ++boxCounter;

  // Title
  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.id = newBox.id + "Header";

  const titleP = document.createElement("p");
  titleP.className = "title";
  titleP.textContent = "Links & Socials";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.onclick = () => {
    newBox.remove();
    linkBoxActive = false;
  };

  const helpBtn = document.createElement("button");
  helpBtn.textContent = "?";

  titleDiv.append(titleP, closeBtn, helpBtn);

  // Body
  const bodyDiv = document.createElement("div");
  bodyDiv.className = "body";

  const socialsList = document.createElement("menu");
  socialsList.innerHTML = `
    <li><a href="https://www.instagram.com/goncalosfckd/" target="_blank">Instagram</a></li>
    <li><a href="https://open.spotify.com/user/fw1nt9sath3nhor0ijsodvgqu?si=4e1295e0d6ae4276" target="_blank">Spotify</a></li>
    <li><a href="https://letterboxd.com/goncalotbh/" target="_blank">Letterboxd</a></li>
    <li><a href="https://steamcommunity.com/id/111connected/" target="_blank">Steam</a></li>
    <li><a href="https://pt.pinterest.com/goncalotbh/" target="_blank">Pinterest</a></li>
  `;
  bodyDiv.appendChild(socialsList);

  newBox.append(titleDiv, bodyDiv);
  newBox.style.zIndex = boxCounter;
  mainContainer.appendChild(newBox);

  dragElement(newBox);

  linkBoxActive = true;
}

// ------------------ CREATE THOUGHTS BOX ------------------

function createThoughtsBox() {
  // Check if already active
  if (thoughtsBoxActive) return;

  const mainContainer = document.querySelector(".main");
  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.id = "thoughtBox" + ++boxCounter;

  // Title
  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.id = newBox.id + "Header";

  const titleP = document.createElement("p");
  titleP.className = "title";
  titleP.textContent = "Thoughts";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.onclick = () => {
    newBox.remove();
    thoughtsBoxActive = false;
  };

  const helpBtn = document.createElement("button");
  helpBtn.textContent = "?";

  titleDiv.append(titleP, closeBtn, helpBtn);

  // Body
  const bodyDiv = document.createElement("div");
  bodyDiv.className = "body";

  const wip = document.createTextNode("WIP");

  bodyDiv.appendChild(wip);

  newBox.append(titleDiv, bodyDiv);
  newBox.style.zIndex = boxCounter;
  mainContainer.appendChild(newBox);

  dragElement(newBox);

  thoughtsBoxActive = true;
}

// ------------------ CREATE GALLERY BOX ------------------

function createGalleryBox() {
  // Check if already active
  if (galleryBoxActive) return;

  const mainContainer = document.querySelector(".main");
  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.id = "galleryBox" + ++boxCounter;

  // Title
  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.id = newBox.id + "Header";

  const titleP = document.createElement("p");
  titleP.className = "title";
  titleP.textContent = "Gallery";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.onclick = () => {
    newBox.remove();
    galleryBoxActive = false;
  };

  const helpBtn = document.createElement("button");
  helpBtn.textContent = "?";

  titleDiv.append(titleP, closeBtn, helpBtn);

  // Body
  const bodyDiv = document.createElement("div");
  bodyDiv.className = "body";

  const wip = document.createTextNode("WIP");

  bodyDiv.appendChild(wip);

  newBox.append(titleDiv, bodyDiv);
  newBox.style.zIndex = boxCounter;
  mainContainer.appendChild(newBox);

  dragElement(newBox);

  galleryBoxActive = true;
}

// ------------------ CREATE TODO BOX ------------------

function createTodoBox() {
  if (todoBoxActive) return;

  const mainContainer = document.querySelector(".main");
  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.id = "todoBox" + ++boxCounter;

  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.id = newBox.id + "Header";

  const titleP = document.createElement("p");
  titleP.className = "title";
  titleP.textContent = "To Do";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.onclick = () => {
    newBox.remove();
    todoBoxActive = false;
  };

  const helpBtn = document.createElement("button");
  helpBtn.textContent = "?";

  titleDiv.append(titleP, closeBtn, helpBtn);

  const bodyDiv = document.createElement("div");
  bodyDiv.className = "body";

  const list = document.createElement("ul");
  list.innerHTML = `
    <li>implement gallery</li>
    <li>implement blog-like "thoughts"</li>
    <li>rewrite bio...</li>
    <li>turn menu into desktop icons/taskbar</li>
  `;
  bodyDiv.appendChild(list);

  newBox.append(titleDiv, bodyDiv);
  newBox.style.zIndex = boxCounter;
  mainContainer.appendChild(newBox);

  dragElement(newBox);

  todoBoxActive = true;
}

// ------------------ REMOVE ELEMENT ------------------

function removeElmnt(id) {
  const element = document.getElementById(id);
  if (element) element.remove();
}

// Make removeElmnt available globally for onclick attributes
window.removeElmnt = removeElmnt;

// ------------------ LISTENERS ------------------

document.getElementById('thoughtsBtn').addEventListener('click', createThoughtsBox);
document.getElementById('galleryBtn').addEventListener('click', createGalleryBox);
document.getElementById('linksBtn').addEventListener('click', createLinksBox);
document.getElementById('todoBtn').addEventListener('click', createTodoBox);

// ------------------ INITIALIZE DRAG ON EXISTING BOXES ------------------

document.querySelectorAll(".box").forEach(dragElement);

// ------------------ RE-INITIALIZE ON RESIZE ------------------

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Re-check if we switched to/from mobile
    document.querySelectorAll(".box").forEach(dragElement);
  }, 250);
});