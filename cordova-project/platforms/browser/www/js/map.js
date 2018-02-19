var mapService = {
    tbInput: null,
    btnSearch: null,
    map: null,

    // Object constructor
    initialize: function () {
        // Init btn search
        this.btnSearch = document.getElementById("btn-search");
        this.btnSearch.addEventListener("click", this.initMap);

        // Init input search
        this.tbInput = document.getElementById("tb-search");
        // trigger click on button when press ENTER(RETURN) key
        this.tbInput.addEventListener("keyup", this.enterKeyPressed);
    },

    enterKeyPressed: function (ev) {
        ev.preventDefault();
        if (ev.keyCode === 13) {
            mapService.btnSearch.click();
        }
    },

    initMap: function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }
};

mapService.initialize();
