var mapView = {
    // UI elements
    lblRes: null,
    lblLat: null,
    lblLng: null,
    mapArea: null,

    // UI elements from external services
    map: null,

    // Object constructor
    initialize: function () {
        // Link with UI elements
        this.lblRes = document.getElementById("info-res");
        this.lblLat = document.getElementById("info-lat");
        this.lblLng = document.getElementById("info-lng");
        this.mapArea = document.getElementById("map");

        // Create new map
        var latlng = new google.maps.LatLng(48.856, 2.352); // Start with Paris, FR
        var mapOptions = {
            zoom: 12,
            center: latlng
        };
        this.map = new google.maps.Map(this.mapArea, mapOptions);
    },

    updateMap: function() {
        this.setMapOnAll(this.map);
        mapView.map.setCenter(mapModel.result.geometry.location);
    },

    displayInfo: function () {
        this.lblRes.className = "info-var";
        this.lblRes.innerHTML = mapModel.result.formatted_address;
        this.lblLat.innerHTML = mapModel.result.geometry.location.lat();
        this.lblLng.innerHTML = mapModel.result.geometry.location.lng();
    },

    displayWarn: function (msg) {
        this.lblRes.className = "info-warn";
        this.lblRes.innerHTML = msg;
        this.lblLat.innerHTML = "";
        this.lblLng.innerHTML = "";
    },

    setMapOnAll: function(map) {
        for (var i = 0; i < mapModel.markers.length; i++) {
            mapModel.markers[i].setMap(map);
        }
    },

    clearMarkers: function () {
        this.setMapOnAll(null);
    }

};