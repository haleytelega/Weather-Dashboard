var userFormEl = document.querySelector("#city-form");
var cityContainerEl = document.querySelector("#city-container");
var cityInputEl = document.querySelector("#city");
var searchTermEl = document.querySelector(".search-city");
var apiKey = "fbd00966461c8849ae90f0d8b2f1332f";

function getCity (city) {
    // console.log(city);
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&temp=Metric&units=Metric&appid=" + apiKey;
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data){
                displayCities(city, data)
                console.log(city, data)
            });
        }
    });
};

function displayCities (city) {
    // var currentCity = city.current.temp;

    if(city != '') {
    cityContainerEl.textContent = "";
    cityContainerEl.innerHTML = city;

    var cityEl = document.createElement("a");

    var cityNameEl = document.createElement("span");
    // cityNameEl.textContent = currentCity

    cityEl.appendChild(cityNameEl);

    cityContainerEl.appendChild(cityEl);
    }
};


userFormEl.addEventListener("submit", function(e) {
    e.preventDefault();
    var inputEl = document.getElementById("city").value;
    console.log(inputEl);
    getCity(inputEl);
});
