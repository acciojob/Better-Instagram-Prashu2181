document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");
    let draggedElement = null;

    images.forEach(image => {
        image.addEventListener("dragstart", (event) => {
            draggedElement = event.target;
            event.target.classList.add("selected");
            event.dataTransfer.setData("text/plain", event.target.id);
        });

        image.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        image.addEventListener("drop", (event) => {
            event.preventDefault();
            const droppedElement = event.target;
            if (draggedElement !== droppedElement) {
                let tempBackground = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = droppedElement.style.backgroundImage;
                droppedElement.style.backgroundImage = tempBackground;
            }
        });

        image.addEventListener("dragend", () => {
            draggedElement.classList.remove("selected");
            draggedElement = null;
        });
    });
});
