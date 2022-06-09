const lightboxMedia = document.getElementsByClassName("lightbox_media");

function open() {
    lightbox.style.display = "block";
}

function close() {
    lightbox.style.display = "none";
}

let mediaIndex = 1;

function mediaVue(n) {
    let i;
    if (n > lightboxMedia.length) {
        mediaIndex = 1;
    }
    if (n < 1) {
        mediaIndex = lightboxMedia.length;
    }
    for (i = 0; i < lightboxMedia.length; i++) {
        lightboxMedia[i].style.display = "none";
    }
    lightboxMedia[mediaIndex - 1].style.display = "block";

}

function mediaNav(n) {
    mediaVue(mediaIndex += n);
}

function mediaLocal(n) {
    mediaVue(mediaIndex = n);
}

document.onkeydown = lightboxNavClavier;

function lightboxNavClavier(e) {

    if (e.keyCode == '37') {
        mediaNav(-1);
    } else if (e.keyCode == '39') {
        mediaNav(1);
    }

    if (lightbox.style.display = "block" && e.code == "Escape") {
        close();
    }
}