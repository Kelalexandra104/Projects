window.onload = init;

function init() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
    
    }
}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var locationDiv = document.getElementById("location");
    locationDiv.innerHTML = "I am at Latitude: " + latitude + " and Longitude: " +
                            longitude + ". But I wish I was in Switzerland.";
     var ourCoords = {
             latitude: 46.8182,
             longitude: 8.2275
                            };
                        
    var km = computeDistance(position.coords, ourCoords);
    var distanceDiv = document.getElementById("distance");
    distanceDiv.innerHTML = "You are " + km + " km away from Switzerland.";
                        }
   


// Initialize map and add marker in Switzerland
function initMap() {
    var switzerland = new google.maps.LatLng(46.8182, 8.2275);

    var options = {
        center: switzerland,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapDiv = document.getElementById("map");
    var map = new google.maps.Map(mapDiv, options);

    var marker = new google.maps.Marker({
        position: switzerland,
        map: map,
        title: "Switzerland"
    });

  
}


