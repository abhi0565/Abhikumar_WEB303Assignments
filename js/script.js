
$(function () {
    // your code here

        navigator.geolocation.getCurrentPosition(success, () => {
            console.log("Please enable geolocation in order to see your coordinates");
        });
    
        function success(position) {
               
           $("#locationhere").html("latitude: " +position.coords.latitude+ "<br>"+"longitude: " + position.coords.longitude);
           let location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            };
           
        

         if (localStorage.getItem("locationobject")) {
            let locationObject = localStorage.getItem("locationobject");
            let locobj = JSON.parse(locationObject);
            let locationNew = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                };
           
            localStorage.setItem("locationobject", JSON.stringify(locationNew));

            $('#content').append("<h2>old location</h2>"+"latitude: " + locobj.latitude+ "<br>"+"longitude: " + locobj.longitude);
            $('#content').append("<h2>welcome back to the page</h2>");
            $('#content').append("<h4>you traveled the   "+ calcDistanceBetweenPoints(locobj.latitude,locobj.longitude,position.coords.latitude,position.coords.longitude)/1000 +" km"+"</h4>");
             
          
           

        }
          else{
           
            $('#content').append("<h2>welcome to the page for first time</h2>");
            localStorage.setItem("locationobject", JSON.stringify(location));
          }
         

        }


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }

});

