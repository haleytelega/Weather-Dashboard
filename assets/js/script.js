var userFormEl = document.querySelector("#city-form");
var cityContainerEl = document.querySelector("#city-container");
var cityInputEl = document.querySelector("#city");
var dayOneEl = document.querySelector("#day1");
var dayTwoEl = document.querySelector("#day2");
var dayThreeEl = document.querySelector("#day3");
var dayFourEl = document.querySelector("#day4");
var dayFiveEl = document.querySelector("#day5");

var apiKey = "fbd00966461c8849ae90f0d8b2f1332f";

function getCity (city) {
    // console.log(city);
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&temp=Metric&units=Metric&appid=" + apiKey;
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data){
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

                var uviUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
                fetch(uviUrl).then(function(response) {
                    if (response.ok) {
                        response.json().then(function(data){
                            var uvi = data.current.uvi;
                            var cityUvi = document.createElement("p");
                            cityUvi.textContent = "UV: " + uvi;

                            cityEl.appendChild(cityUvi);

                    });
                }

            var weekUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&temp=Metric&units=Metric&appid=" + apiKey;
            fetch(weekUrl).then(function(response) {
            if(response.ok) {
            response.json().then(function(data) {
            console.log(data);
                //day 1
                var oneTemp = data.list[0].main.temp;
                var oneWind = data.list[0].wind.speed;
                var oneHumidity = data.list[0].main.humidity;

                var tempOne = document.createElement("p");
                tempOne.textContent = "Temp: " + oneTemp;
                oneEl.append(oneTemp);

                var windOne = document.createElement("p");
                windOne.textContent = "Wind: " + oneWind;
                oneEl.appendChild(windOne);

                var humidityOne = document.createElement("p");
                humidityOne.textContent = "Humidity: " + oneHumidity;
                oneEl.appendChild(humidityOne);

                //day 2
                var twoTemp = data.list[8].main.temp;
                var twoWind = data.list[8].wind.speed;
                var twoHumidity = data.list[8].main.humidity;

                var tempTwo = document.createElement("p");
                tempTwo.textContent = "Temp: " + twoTemp;
                twoEl.append(tempTwo);

                var windTwo = document.createElement("p");
                windTwo.textContent = "Wind: " + twoWind;
                twoEl.appendChild(windTwo);

                var humidityTwo = document.createElement("p");
                humidityTwo.textContent = "Humidity: " + twoHumidity;
                twoEl.appendChild(humidityTwo);

                //day 3
                var threeTemp = data.list[16].main.temp;
                var threeWind = data.list[16].wind.speed;
                var threeHumidity = data.list[16].main.humidity;

                var tempThree = document.createElement("p");
                tempThree.textContent = "Temp: " + threeTemp;
                threeEl.append(tempThree);

                var windThree = document.createElement("p");
                windThree.textContent = "Wind: " + threeWind;
                threeEl.appendChild(windThree);

                var humidityThree = document.createElement("p");
                humidityThree.textContent = "Humidity: " + threeHumidity;
                threeEl.appendChild(humidityThree);

                //day 4
                var fourTemp = data.list[24].main.temp;
                var fourWind = data.list[24].wind.speed;
                var fourHumidity = data.list[24].main.humidity;

                var tempFour = document.createElement("p");
                tempFour.textContent = "Temp: " + fourTemp;
                fourEl.append(tempFour);

                var windFour = document.createElement("p");
                windFour.textContent = "Wind: " + fourWind;
                fourEl.appendChild(windFour);

                var humidityFour = document.createElement("p");
                humidityFour.textContent = "Humidity: " + fourHumidity;
                fourEl.appendChild(humidityFour);

                //day 5
                var fiveTemp = data.list[32].main.temp;
                var fiveWind = data.list[32].wind.speed;
                var fiveHumidity = data.list[32].main.humidity;

                var tempFive = document.createElement("p");
                tempFive.textContent = "Temp: " + fiveTemp;
                fiveEl.append(tempFive);

                var windFive = document.createElement("p");
                windFive.textContent = "Wind: " + fiveWind;
                fiveEl.appendChild(windFive);

                var humidityfive = document.createElement("p");
                humidityfive.textContent = "Humidity: " + fiveHumidity;
                fiveEl.appendChild(humidityfive);
            });
        }
    });
    });
    });
    }

    if(city != '') {
    cityContainerEl.textContent = "";

    var cityEl = document.createElement("a");
    
    var getCurrentDate = moment().format("M/D/YYYY");
    console.log(getCurrentDate);
    cityContainerEl.textContent = city + "(" + getCurrentDate + ")";

    var newDate = moment().add(1, 'd').format("M/D/YYYY");

    var twoDate = moment().add(2, 'd').format("M/D/YYYY");

    var threeDate = moment().add(3, 'd').format("M/D/YYYY");

    var fourDate = moment().add(4, 'd').format("M/D/YYYY");

    var fiveDate = moment().add(5, 'd').format("M/D/YYYY");

    cityContainerEl.appendChild(cityEl);

    var oneEl = document.createElement("a");
    dayOneEl.textContent = newDate;
    dayOneEl.append(oneEl);

    var twoEl = document.createElement("a");
    dayTwoEl.textContent = twoDate;
    dayTwoEl.appendChild(twoEl);

    var threeEl = document.createElement("a");
    dayThreeEl.textContent = threeDate;
    dayThreeEl.appendChild(threeEl);

    var fourEl = document.createElement("a");
    dayFourEl.textContent = fourDate;
    dayFourEl.appendChild(fourEl);

    var fiveEl = document.createElement("a");
    dayFiveEl.textContent = fiveDate;
    dayFiveEl.appendChild(fiveEl);
    } 
    });
}


userFormEl.addEventListener("submit", function(e) {
    e.preventDefault();
    var inputEl = document.getElementById("city").value;
    console.log(inputEl);
    getCity(inputEl);
});
