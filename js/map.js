var map = L.map('map', {scrollWheelZoom: false, minZoom: 12, maxZoom: 14}).setView([39.290385, -76.612189], 13);

//Mapbox tiles
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'bzelip.17515284',
    accessToken: 'pk.eyJ1IjoiYnplbGlwIiwiYSI6ImIwMTZjMmY1YzViODIyZmRkYmZiZWYxZmU3NWM1MzQwIn0.yz0R9vap9zNUMy73Q0lV2w'
}).addTo(map);

//OSM tiles
//    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
//      maxZoom: 18
//    }).addTo(map);

// Markers
var popup = L.popup()
.setLatLng([39.30, -76.62])
.setContent("Park Cafe!!")
.openOn(map);

var marker = L.marker([39.31, -76.61]).addTo(map)
  .bindPopup("<h2 class='m0'>The Crown MF*#@RS!</h2><button class='btn btn-primary' data-toggle='modal' data-target='#Crown_2015_07_23'>Crown Open</button>").openPopup();