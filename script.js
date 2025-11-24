const GlobalLateralOffset = 30;
let boxCounter = 0;
let chatBoxActive = false;
let linkBoxActive = false;
let galleryBoxActive = false;
let thoughtsBoxActive = false;

// ------------------ DRAG FUNCTION ------------------

function dragElement(elmnt) {
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
  closeBtn.onclick = () => newBox.remove();

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
    <li><a href="https://letterboxd.com/goncalotbh/">Letterboxd</a></li>
    <li><a href="https://steamcommunity.com/id/111connected/" target="_blank">Steam</a></li>
    <li><a href="https://pt.pinterest.com/goncalotbh/" target="_blank">Pinterest</a></li>
  `;
  bodyDiv.appendChild(socialsList);

  newBox.append(titleDiv, bodyDiv);
  newBox.style.zIndex = boxCounter;
  mainContainer.appendChild(newBox);

  dragElement(newBox);

  flipStatus(linkBoxActive);

  console.log("Created new Links/Socials box with ID:", newBox.id);
}

// ------------------ CREATE THOUGHTS BOX ------------------

function createThoughtsBox() {
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
  closeBtn.onclick = () => newBox.remove();

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

  flipStatus(thoughtsBoxActive);

  console.log("Created new Thoughts box with ID:", newBox.id);
}

// ------------------ CREATE GALLERY BOX ------------------

function createThoughtsBox() {
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
  closeBtn.onclick = () => newBox.remove();

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

  flipStatus(galleryBoxActive);

  console.log("Created new Gallery box with ID:", newBox.id);
}

// ------------------ REMOVE ELEMENT ------------------

export function removeElmnt(id) {
  const element = document.getElementById(id);
  if (element) element.remove();
}

// ------------------ Box Status ----------------------

export function getActiveStatus(boxString) {
  switch(boxString) {
    case "chat": return chatBoxActive;
    case "links": return linkBoxActive;
    case "gallery": return galleryBoxActive;
    case "thoughts": return thoughtsBoxActive;
  }
}

export function flipStatus(boxString) {
  switch(boxString) {
    case "chat": chatBoxActive = !chatBoxActive;
    case "links": linkBoxActive = !linkBoxActive;
    case "gallery": galleryBoxActive = !galleryBoxActive;
    case "thoughts": thoughtsBoxActive = !thoughtsBoxActive;
  }
}

// ------------------ INITIALIZE DRAG ON EXISTING BOXES ------------------

document.querySelectorAll(".box").forEach(dragElement);
