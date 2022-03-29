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

function displayCities (city, data) {
    var cityTemp = data.main.temp;
    var cityHumitity = data.main.humidity;
    var cityWind = data.wind.speed;

    if(city != '') {
    cityContainerEl.textContent = "";
    cityContainerEl.textContent = city;

    var cityEl = document.createElement("a");

    var cityTempEl = document.createElement("p");
    cityTempEl.textContent = "Tempature: " + cityTemp + "°C";

    var cityHumitityEl = document.createElement("p");
    cityHumitityEl.textContent = "Humitity: " + cityHumitity + "%";

    var cityWindEl = document.createElement("p");
    cityWindEl.textContent = "Wind: " + cityWind + "MPH";

    cityEl.appendChild(cityTempEl);

    cityEl.appendChild(cityHumitityEl);

    cityEl.appendChild(cityWindEl);

    cityContainerEl.appendChild(cityEl);
    }
};


userFormEl.addEventListener("submit", function(e) {
    e.preventDefault();
    var inputEl = document.getElementById("city").value;
    console.log(inputEl);
    getCity(inputEl);
});
