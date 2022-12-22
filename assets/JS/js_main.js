let size_s=$(document).width();




$( document ).ready(function() {
    let map;
    function initMap() {
        var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            center: new google.maps.LatLng(19.69629621485706, -98.82284606977487)
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(19.69629621485706, -98.82284606977487),
            map: map,
            title: 'Sky Balloons'
        });
    }

    window.initMap = initMap;
    console.log( "ready!" );
    basicmap();
});




