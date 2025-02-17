//your code here
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");
    let draggedElement = null;

    images.forEach(image => {
        // When dragging starts
        image.addEventListener("dragstart", (event) => {
            draggedElement = event.target;
            event.target.classList.add("selected");
        });

        // When dragging over another element (Allow Drop)
        image.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        // When dropping onto another element
        image.addEventListener("drop", (event) => {
            event.preventDefault();
            if (draggedElement !== event.target) {
                // Swap the background images
                let temp = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = event.target.style.backgroundImage;
                event.target.style.backgroundImage = temp;
            }
        });

        // When dragging ends
        image.addEventListener("dragend", () => {
            draggedElement.classList.remove("selected");
            draggedElement = null;
        });
    });
});

