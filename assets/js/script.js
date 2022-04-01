var userFormEl = document.querySelector("#city-form");
var cityContainerEl = document.querySelector("#city-container");
var cityInputEl = document.querySelector("#city");
var fiveDayEl = document.querySelector(".five");
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

    //     var uviUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    //     fetch(uviUrl).then(function(response) {
    //         if (response.ok) {
    //             response.json().then(function(data){
    //                 console.log(data)
    //         });
    //     }
    // });
    
    var weekUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&temp=Metric&units=Metric&appid=" + apiKey;
    fetch(weekUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);

                var cityLat = data.coord.lat;
                var cityLon = data.coord.lon;

                // var fiveTemp = data.list.main.temp;
                // var fiveHumidity = data.list.main.humidity;
                // var fiveWind = data.list.wind.speed

                // var fiveCity = data.city.name;

                // if(city != '') {
                //     console.log(city);

                // var fiveTemp = document.createElement("p");
                // fiveTemp.textContent = "Temp: " + fiveTemp;

                //     days.appendChild(fiveTemp);

                //     fiveDayEl.appendChild(days);
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

    // var uviEl = document.createElement("p");
    // uviEl.textContent = "UV: " + uvIndex + ".";

    cityEl.appendChild(cityTempEl);

    cityEl.appendChild(cityHumitityEl);

    cityEl.appendChild(cityWindEl);
    
    // cityEl.appendChild(uviEl);

    cityContainerEl.appendChild(cityEl);

    }
};


userFormEl.addEventListener("submit", function(e) {
    e.preventDefault();
    var inputEl = document.getElementById("city").value;
    console.log(inputEl);
    getCity(inputEl);
});
