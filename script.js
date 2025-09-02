const GlobalLateralOffset = 30;

boxCounter = 0;

function removeElmnt(id) {
  const element = document.getElementById(id);
  element.remove();
}

function dragElement(elmnt) {
  // Configuration object for initial positions
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
  // Fix the header ID case sensitivity issue
  const header =
    document.getElementById(elmnt.id + "Header") ||
    document.getElementById(elmnt.id + "header") ||
    elmnt;

  // Remove CSS transform to avoid conflicts with JS positioning
  elmnt.style.transform = "none";

  // Set initial position from configuration or use fallback
  if (boxPositions[elmnt.id]) {
    elmnt.style.top = boxPositions[elmnt.id].top;
    elmnt.style.left = boxPositions[elmnt.id].left;
  } else {
    // Fallback for boxes not in configuration
    if (!elmnt.style.left) elmnt.style.left = "100px";
    if (!elmnt.style.top) elmnt.style.top = "100px";
  }

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

function createLinksBox() {
  // Create the main box div
  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.id = "linksBox" + ++boxCounter;

  // Create the title section
  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.id = newBox.id + "Header";

  // Title content
  const titleP = document.createElement("p");
  titleP.className = "title";
  titleP.textContent = "Links & Socials";

  // Buttons
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.onclick = function () {
    newBox.remove();
  };

  const helpBtn = document.createElement("button");
  helpBtn.textContent = "?";

  // Assemble title
  titleDiv.appendChild(titleP);
  titleDiv.appendChild(closeBtn);
  titleDiv.appendChild(helpBtn);

  // Create the body section
  const bodyDiv = document.createElement("div");
  bodyDiv.className = "body";

  // Add content to body (you can customize this)
  const socialsList = document.createElement("menu");
  socialsList.innerHTML = `
          <li><a href="https://www.instagram.com/goncalosfckd/" target="_blank">Instagram</a></li>
          <li><a href="https://open.spotify.com/user/fw1nt9sath3nhor0ijsodvgqu?si=4e1295e0d6ae4276" target="_blank">Spotify</a></li>
          <li><a href="https://letterboxd.com/goncalotbh/">Letterboxd</a></li>
          <li><a href="https://steamcommunity.com/id/111connected/" target="_blank">Steam</a></li>
          <li><a href="https://pt.pinterest.com/goncalotbh/" target="_blank">Pinterest</a></li>
        `;

  bodyDiv.appendChild(socialsList);

  // Assemble the complete box
  newBox.appendChild(titleDiv);
  newBox.appendChild(bodyDiv);

  // Add the new box to the main container
  const mainContainer = document.querySelector(".main");
  mainContainer.appendChild(newBox);

  dragElement(newBox);

  console.log("Created new Links/Socials box with ID:", newBox.id);
}

// --------- CHATBOX ------------

chatOpen = false;

function createChatBox() {
  if (!chatOpen) {
    // Create the main box div
    chatOpen = !chatOpen;
    const newBox = document.createElement("div");
    newBox.className = "box";
    newBox.id = "chatBox" + ++boxCounter;

    // Create the title section
    const titleDiv = document.createElement("div");
    titleDiv.className = "title";
    titleDiv.id = newBox.id + "Header";

    // Title content
    const titleP = document.createElement("p");
    titleP.className = "title";
    titleP.textContent = "Chat";

    // Buttons
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.onclick = function () {
      newBox.remove();
      chatOpen = !chatOpen;
    };

    const helpBtn = document.createElement("button");
    helpBtn.textContent = "?";

    // Assemble title
    titleDiv.appendChild(titleP);
    titleDiv.appendChild(closeBtn);
    titleDiv.appendChild(helpBtn);

    // Create the body section
    const bodyDiv = document.createElement("div");
    bodyDiv.className = "body";

    // Chat
    const chatDiv = document.createElement("div");
    chatDiv.className = "chat";
    chatDiv.id = "chat";

    // Message Bar
    const msgInput = document.createElement("input");
    msgInput.id = "msg";
    msgInput.placeholder = "Type your message...";

    // Send Button
    const sendBtn = document.createElement("button");
    sendBtn.id = "send";
    sendBtn.textContent = "Send!";

    bodyDiv.appendChild(chatDiv);
    bodyDiv.appendChild(msgInput);
    bodyDiv.appendChild(sendBtn);

    // Assemble the complete box
    newBox.appendChild(titleDiv);
    newBox.appendChild(bodyDiv);

    // Add the new box to the main container
    const mainContainer = document.querySelector(".main");
    mainContainer.appendChild(newBox);

    dragElement(newBox);

    console.log("Created new Chatbox box with ID:", newBox.id);
  }
}

// Make box elements draggable
document.querySelectorAll(".box").forEach((box) => {
  dragElement(box);
});
