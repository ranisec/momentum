const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

const bgImage = `img/${chosenImage}`;

//document.body.appendChild(bgImage);

//document.body.style.backgroundImage = "url(bgImage)";
const bgImage2 = document.body.style;
bgImage2.backgroundImage = `url(img/${chosenImage})`;
console.log(bgImage2);
