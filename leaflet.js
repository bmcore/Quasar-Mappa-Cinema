$(function () {

    var mymap = L.map('mapid').setView([41.8919300, 12.5113300], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);

    $.getJSON("http://dati.lazio.it/catalog/api/action/datastore_search?resource_id=b4950fa1-75a7-4324-aa4c-f04e7cde04e9", function (data) {
        data.result.records.forEach(function (record) {
            var lat = record.lat
            var lon = record.lon
            var size = record.CAPIENZA
            var name = record.DENOMINAZIONE
            if (lon & lat) {
                L.circle([lat, lon], {
                    radius: size
                }).addTo(mymap);
                console.log(name)
            }
        });
    });
});