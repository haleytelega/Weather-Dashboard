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
                console.log(data)
                let lat = data.coord.lat;
                let lon = data.coord.lon;
                var cityTemp = data.main.temp;
                var cityHumitity = data.main.humidity;
                var cityWind = data.wind.speed;

                var cityTempEl = document.createElement("p");
                cityTempEl.textContent = "Tempature: " + cityTemp + "°C";
            
                var cityHumitityEl = document.createElement("p");
                cityHumitityEl.textContent = "Humitity: " + cityHumitity + "%";
            
                var cityWindEl = document.createElement("p");
                cityWindEl.textContent = "Wind: " + cityWind + "MPH";
                // displayCities(city, data)

                cityEl.appendChild(cityTempEl);

                cityEl.appendChild(cityHumitityEl);
            
                cityEl.appendChild(cityWindEl);

                console.log(lat, lon )

                var weekUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&temp=Metric&units=Metric&appid=" + apiKey;
                fetch(weekUrl).then(function(response) {
                if(response.ok) {
                response.json().then(function(data) {
                console.log(data);

                var uviUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
                fetch(uviUrl).then(function(response) {
                    if (response.ok) {
                        response.json().then(function(data){
                            console.log(data)
                            var uvi = data.current.uvi;
                            console.log(uvi);
                            var cityUvi = document.createElement("p");
                            cityUvi.textContent = "UV: " + uvi;

                            cityEl.appendChild(cityUvi);
                var fiveUrl = ""

                    });
                }
            });

            });
        }
    });
    });
    }

    if(city != '') {
    cityContainerEl.textContent = "";

    var cityEl = document.createElement("a");
    
    var getCurrentDate = moment().format("M/D/YYYY");
    console.log(getCurrentDate);
    cityContainerEl.textContent = city + "(" + getCurrentDate + ")";

    cityContainerEl.appendChild(cityEl);
    }
    });
}


userFormEl.addEventListener("submit", function(e) {
    e.preventDefault();
    var inputEl = document.getElementById("city").value;
    console.log(inputEl);
    getCity(inputEl);
});
