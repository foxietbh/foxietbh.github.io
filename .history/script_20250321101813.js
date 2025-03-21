function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    // Try to find the header, otherwise, attach the event to the entire element
    var header = document.getElementById(elmnt.id + "header") || elmnt;
    header.onpointerdown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointerup = closeDragElement;
        document.onpointermove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        const parentWidth = window.innerWidth;
        const parentHeight = window.innerHeight;
        const topbarHeight = 50;

        let newTop = elmnt.offsetTop - pos2;
        let newLeft = elmnt.offsetLeft - pos1;

        const maxTop = parentHeight - elmnt.offsetHeight;
        const maxLeft = parentWidth - elmnt.offsetWidth;

        newTop = Math.max(topbarHeight, Math.min(newTop, maxTop));
        newLeft = Math.max(0, Math.min(newLeft, maxLeft)); // Constrain left and right

        elmnt.style.top = newTop + "px";
        elmnt.style.left = newLeft + "px";
    }

    function closeDragElement() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

// Ensure the element has position absolute
document.getElementById("catbox").style.position = "absolute";
dragElement(document.getElementById("catbox"));
