function zoomIn(el) {
    el.style.transform = "translateX(-20%) scale(1.5)";
}

function zoomOut(el) {
    el.style.transform = "";
}

function cycleImages() {
    const imgPath = "./static/img/"
    const img = document.getElementById("img");

    const photosPathes = ["me-1.jpg", "img-4.jpg", "img-2.jpg", "img-3.jpg", "me-3.jpg", "img-5.jpg"];
    const photosQuantity = photosPathes.length;

    let counter = 1;
    let interval = setInterval(function() {
        img.src = imgPath + photosPathes[counter];

        counter++;
        if (counter == photosQuantity) {
            counter = 0;
        }
    }, 5000);
}

window.onload = function() {
    cycleImages();
}
