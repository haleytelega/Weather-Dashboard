var userFormEl = document.querySelector("#city-form");
var apiKey = "fbd00966461c8849ae90f0d8b2f1332f";

var getCity = function () {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city.name + "&appid=" + apiKey;
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data){
                console.log(city.name, data)
                console.log("is this working?");
            });
        }
    });
};

userFormEl.addEventListener("submit", getCity);