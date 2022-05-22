const BASE = "https://cdn.theflyingrat.com/assets/links/assets/img/background/";
const SUFFIX = ".webp";
const IMAGES = [
    "city",
    "building",
    "building2",
    "japan",
    "kyiv",
    "light",
    "ny",
    "road",
    "tall"
];

const RANDOMIMG = IMAGES[Math.floor(Math.random() * IMAGES.length)];
const IMGURL = BASE + RANDOMIMG + SUFFIX;
document.getElementById("body").style.backgroundImage = "url('"+ IMGURL +"')"