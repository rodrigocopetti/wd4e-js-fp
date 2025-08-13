function upDate(previewPic) {
  console.log("upDate triggered");

  const imageDiv = document.getElementById("image");

  console.log("image src: ", previewPic.src);
  console.log("image alt: ", previewPic.alt);

  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("unDo triggered");

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url("")`;
  imageDiv.innerHTML = "Hover over an image below to display here.";
}


function bodyLoad() {
  console.log("Body loaded");
  const images = document.getElementsByClassName("preview");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
