function basicmap() {
    var mapOptions = {
        zoom: 15,
        scrollwheel: false,
        center: new google.maps.LatLng(35.849713565454174, -78.60453681740815)
    };
    var mapElement = document.getElementById('contact-map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(35.849713565454174, -78.60453681740815),
        map: map,
        title: 'Parra G'
    });
}
if ($('#contact-map').length != 0) {
    google.maps.event.addDomListener(window, 'load', basicmap);
}



