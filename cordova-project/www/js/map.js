var mapService = {
    btnDisplayMap: null,
    map: null,

    // Object constructor
    initialize: function () {
        this.btnDisplayMap = document.getElementById("display-map");
        this.btnDisplayMap.addEventListener("click", this.initMap);
    },

    initMap: function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }
};

mapService.initialize();
