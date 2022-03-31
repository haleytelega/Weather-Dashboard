var userFormEl = document.querySelector("#city-form");
var cityContainerEl = document.querySelector("#city-container");
var cityInputEl = document.querySelector("#city");
var apiKey = "fbd00966461c8849ae90f0d8b2f1332f";

function getCity (city) {
    // console.log(city);
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&temp=Metric&units=Metric&appid=" + apiKey;
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data){
                displayCities(city, data)
            });
        }
        });
};

function getUVI (lat, lon) {
        var uviUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&uvi=" + uvi + "&appid=" + apiKey;
        fetch(uviUrl).then(function(response) {
            if (response.ok) {
                response.json().then(function(data){
                    console.log(data);
            });
        }
    });
}


function displayCities (city, data) {
    var cityTemp = data.main.temp;
    var cityHumitity = data.main.humidity;
    var cityWind = data.wind.speed;
    var cityLat = data.coord.lat;
    var cityLon = data.coord.lon;
    // var uvIndex = data.current.uvi;
    var uvi = getUVI(cityLat, cityLon);

    if(city != '') {
    cityContainerEl.textContent = "";

    var cityEl = document.createElement("a");

    var cityNameEl = document.createElement("p");
    cityContainerEl.textContent = "Current Day's weather for: " + city;


    var cityTempEl = document.createElement("p");
    cityTempEl.textContent = "Tempature: " + cityTemp + "°C";

    var cityHumitityEl = document.createElement("p");
    cityHumitityEl.textContent = "Humitity: " + cityHumitity + "%";

    var cityWindEl = document.createElement("p");
    cityWindEl.textContent = "Wind: " + cityWind + "MPH";

    var uviEl = document.createElement("p");
    uviEl.textContent = "UV: " + uvi + ".";

    cityEl.appendChild(cityTempEl);

    cityEl.appendChild(cityHumitityEl);

    cityEl.appendChild(cityWindEl);
    
    cityEl.appendChild(uviEl);

    cityContainerEl.appendChild(cityEl);
    }
};


userFormEl.addEventListener("submit", function(e) {
    e.preventDefault();
    var inputEl = document.getElementById("city").value;
    console.log(inputEl);
    getCity(inputEl);
});
