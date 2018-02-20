/*
    Some pieces of this code are from Google Maps API Examples
    [ https://developers.google.com/maps/documentation/javascript/geocoding?hl=en ]


 */


/* Variables */

var btnSearch = document.getElementById("btn-search");
var tbInput = document.getElementById("tb-search");
var lblRes = document.getElementById("info-res");
var lblLat = document.getElementById("info-lat");
var lblLng = document.getElementById("info-lng");

var geocoder;
var map;
var markers = [];


/* Events listener */

tbInput.addEventListener("keyup", enterKeyPressed);
btnSearch.addEventListener("click", codeAddress);


/* Functions */

function enterKeyPressed(ev) {
    ev.preventDefault();
    if (ev.keyCode === 13) {
        btnSearch.click();
    }
}

function displayInfo (res, lat, lng) {
    lblRes.className = "info-var";
    lblRes.innerHTML = res;
    lblLat.innerHTML = lat;
    lblLng.innerHTML = lng;
}

function displayError (msg) {
    lblRes.className = "info-error";
    lblRes.innerHTML = msg;
    lblLat.innerHTML = "";
    lblLng.innerHTML = "";
}


function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(48.856, 2.352); // Start with Paris, FR
    var mapOptions = {
        zoom: 12,
        center: latlng
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function codeAddress() {
    var address = document.getElementById('tb-search').value;
    if (address != "") {
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == 'OK') {
                var location = results[0].geometry.location;

                deleteMarkers();
                map.setCenter(location);
                addMarker(location);
                displayInfo(results[0].formatted_address,location.lat(), location.lng());
            } else {
                deleteMarkers();
                displayError("An error as occured: " + status);
            }
        });
    }
}


/* Markers management

 * From Google Developers Examples
 * [ https://developers.google.com/maps/documentation/javascript/examples/marker-remove?hl=en ]
 *
 */

// Adds a marker to the map and push to the array.
function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}