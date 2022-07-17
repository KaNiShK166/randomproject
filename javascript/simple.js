
// i can have the location of the user of my website using my geolocation api


var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

// const fadeout = () => {
//     const loaderWrapper = 
//     document.querySelector('.wrapper');
//     loaderWrapper.classList.add('fade')
// }

// window.addEventListener('load' , fadeout);