/*
    Assignment #4
    Kiran Ale Magar
*/

$(function(){
    if(!navigator.geolocation){
        $("#loc").html("<h1>please enable the gio location</h1>")
    }else{
        //get locaiton
        navigator.geolocation.getCurrentPosition(success, fail);
        function success(pos){
            console.log(pos);
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
            let accuracy = pos.coords.accuracy;


            $("#locationhere").html("<p>Your latitude is:" + lat + " </p>");
            $("#locationhere").append("<p>Your longitude is:" + lon + " </p>");
            $("#locationhere").append(`<p>Location accuracy: ${accuracy.toFixed(2)} km</p>`);

            if (localStorage.getItem("storedLatitude") && localStorage.getItem("storedLongitude")) {
                let storedLat = parseFloat(localStorage.getItem("storedLatitude"));
                let storedLon = parseFloat(localStorage.getItem("storedLongitude"));

                let distance = calcDistance(lat, lon, storedLat, storedLon);
                $("#locationhere").append("<p>You traveled approximately " + distance.toFixed(2) + " km since your last visit.</p>");
                $("h2").html("Welcome back to the page!");
            } else {
                $("h2").html("Welcome to the page for the first time!");
            }

            localStorage.setItem("storedLatitude", lat);
            localStorage.setItem("storedLongitude", lon);
        }
        function fail(){
            $("#locationhere").html("<p>we cannot get the location</p>")
        }

        function calcDistance(lat1, lon1, lat2, lon2) {
            const R = 6371; 
            const dLat = (lat2 - lat1) * (Math.PI / 180);
            const dLon = (lon2 - lon1) * (Math.PI / 180);
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        }
    }

})


