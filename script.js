function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = document.getElementById(elmnt.id + "header") || elmnt;
    
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
        
        // Define boundaries
        const topbarHeight = 50;
        const viewportHeight = window.innerHeight;
        
        // Calculate new position
        let newLeft = elmnt.offsetLeft - pos1;
        let newTop = elmnt.offsetTop - pos2;
        
        // Apply boundary constraints
        const minTop = topbarHeight;
        const maxTop = viewportHeight - elmnt.offsetHeight;
        
        // Clamp values within boundaries
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
const catbox = document.getElementById("catbox");
const catbox2 = document.getElementById("catbox2");

if (catbox) dragElement(catbox);
if (catbox2) dragElement(catbox2);