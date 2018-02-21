var mapModel = {
    markers: [],
    result: null,


    // Object constructor
    initialize: function () {
        // Reset values
        this.markers = [];
        this.result = null;
    },

    addMarker: function(location, map) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        this.markers.push(marker);
    },

    deleteMarkers: function() {
        this.markers = [];
    }
};