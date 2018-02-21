var mapController = {
    // Input elements
    btnSearch: null,
    btnLocateMe: null,
    tbInput: null,

    // External services
    geocoder: null,

    // Object constructor
    initialize: function () {
        // Link UI elements
        this.btnSearch = document.getElementById("btn-search");
        this.btnLocateMe = document.getElementById("btn-locateme");
        this.tbInput = document.getElementById("tb-search");

        // Init geocoder
        this.geocoder = new google.maps.Geocoder();

        // Listen events
        this.btnSearch.addEventListener("click", mapController.btnSearchPressed);
        this.btnLocateMe.addEventListener("click", mapController.btnLocateMePressed);
        this.tbInput.addEventListener("keyup", mapController.enterKeyPressed);
    },

    // Event listener
    enterKeyPressed: function (ev) {
        ev.preventDefault();
        if (ev.keyCode === 13) {
            mapController.btnSearch.click();
        }
    },

    btnSearchPressed: function (ev) {
        mapController.codeAddress(mapController.tbInput.value);
    },

    btnLocateMePressed: function (ev) {
        navigator.geolocation.getCurrentPosition(mapController.onGpsSuccess, mapController.onGpsError);
        mapView.displayWarn("Waiting for current position...");
    },


    codeAddress: function (address) {
        if (address != "") {
            mapView.displayWarn("Searching...");
            mapController.geocoder.geocode({
                'address': address
            }, function (results, status) {
                if (status == 'OK') {
                    mapModel.result = results[0];
                    mapView.clearMarkers();
                    mapModel.deleteMarkers();
                    mapModel.addMarker(results[0].geometry.location, mapView.map);
                    mapView.updateMap();
                    mapView.displayInfo();
                }
                else {
                    mapView.clearMarkers();
                    mapModel.deleteMarkers();
                    mapView.updateMap();
                    mapView.displayWarn("An error as occured: " + status);
                }
            })
        }
    },

    codeGps: function (lat, lng) {
        if ((lat != "") &&(lng != "")) {
            var latlng = new google.maps.LatLng(lat, lng);
            this.geocoder.geocode({
                'location': latlng
            },function (results, status) {
                if (status == 'OK') {
                    mapModel.result = results[0];
                    mapView.clearMarkers();
                    mapModel.deleteMarkers();
                    mapModel.addMarker(results[0].geometry.location, mapView.map);
                    mapView.updateMap();
                    mapView.displayInfo();
                }
                else {
                    mapView.clearMarkers();
                    mapModel.deleteMarkers();
                    mapView.updateMap();
                    mapView.displayWarn("An error as occured: " + status);
                }
            })
        }
    },

    onGpsSuccess: function (position) {
        mapController.codeGps(position.coords.latitude, position.coords.longitude);
    },

    onGpsError: function (error) {
        mapView.clearMarkers();
        mapModel.deleteMarkers();
        mapView.displayWarn('An error as occured: ' + error.message + ' [Code: ' + error.code + ']');
    }

};