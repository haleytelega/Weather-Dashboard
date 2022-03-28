var userFormEl = document.querySelector("#city-form");
var cityContainerEl = document.querySelector("#city-container");
var cityInputEl = document.querySelector("#city");
var apiKey = "fbd00966461c8849ae90f0d8b2f1332f";

function getCity (city) {
    // console.log(city);
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=Metric&appid=" + apiKey;
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data){
                displayCities(city)
                console.log(city, data)
            });
        }
    });
};

function displayCities () {
    if(city == "Windsor") {
        cityContainerEl.textContent = "this is working";
    }
}


userFormEl.addEventListener("submit", function(e) {
    e.preventDefault();
    var inputEl = document.getElementById("city").value;
    console.log(inputEl);
    getCity(inputEl);
});
