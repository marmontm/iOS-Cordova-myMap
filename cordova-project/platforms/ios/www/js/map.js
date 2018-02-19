var mapService = {
    btnSearch: null,
    map: null,

    // Object constructor
    initialize: function () {
        this.btnSearch = document.getElementById("btn-search");
        this.btnSearch.addEventListener("click", this.initMap);
    },

    initMap: function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }
};

mapService.initialize();
