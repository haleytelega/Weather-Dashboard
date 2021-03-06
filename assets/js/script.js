var userFormEl = document.querySelector("#city-form");
var cityContainerEl = document.querySelector("#city-container");
var cityInputEl = document.querySelector("#city");
var dayOneEl = document.querySelector("#day1");
var dayTwoEl = document.querySelector("#day2");
var dayThreeEl = document.querySelector("#day3");
var dayFourEl = document.querySelector("#day4");
var dayFiveEl = document.querySelector("#day5");
var cityIcon = document.querySelector(".weather-icon");
var searchedCities = document.querySelector("#searched-cities")

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
                var icon = data.weather[0].icon;
                // cityIcon.setAttribute = ("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
                console.log(icon);


                var currentIcon = document.getElementById('city-container');
                var imgEl = document.createElement('img');
                imgEl.src = src="https://openweathermap.org/img/wn/" + icon + "@2x.png";
                currentIcon.append(imgEl);

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
                            var uviIndex = data.current.uvi;
                            var cityUvi = document.createElement("p");
                            cityUvi.textContent = "UV: " + uviIndex;

                            cityEl.appendChild(cityUvi);

                            if (uviIndex >= 0 && uviIndex <= 2){
                                $(cityUvi).addClass("uvi-green");
                            } else if (uviIndex >= 3 && uviIndex <= 5) {
                                $(cityUvi).addClass("uvi-yellow");
                            } else if ( uviIndex >= 6 && uviIndex <= 7) {
                                $(cityUvi).addClass("uvi-orange");
                            } else if (uviIndex >= 8 && uviIndex <= 10) {
                                $(cityUvi).addClass("uvi-red");
                            } else {
                                $(cityUvi).addClass("uvi-purple");
                            }
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
                var icon1 = data.list[0].weather[0].icon;

                var tempOne = document.createElement("p");
                tempOne.textContent = "Temp: " + oneTemp + "°C";
                oneEl.appendChild(tempOne);

                var windOne = document.createElement("p");
                windOne.textContent = "Wind: " + oneWind +  "MPH";
                oneEl.appendChild(windOne);

                var humidityOne = document.createElement("p");
                humidityOne.textContent = "Humidity: " + oneHumidity + "%";
                oneEl.appendChild(humidityOne);

                var currentIcon = document.getElementById('day1');
                var imgEl = document.createElement('img');
                imgEl.src = src="https://openweathermap.org/img/wn/" + icon1 + "@2x.png";
                currentIcon.append(imgEl);

                //day 2
                var twoTemp = data.list[8].main.temp;
                var twoWind = data.list[8].wind.speed;
                var twoHumidity = data.list[8].main.humidity;
                var icon2 = data.list[8].weather[0].icon;

                var tempTwo = document.createElement("p");
                tempTwo.textContent = "Temp: " + twoTemp + "°C";
                twoEl.append(tempTwo);

                var windTwo = document.createElement("p");
                windTwo.textContent = "Wind: " + twoWind + "MPH";
                twoEl.appendChild(windTwo);

                var humidityTwo = document.createElement("p");
                humidityTwo.textContent = "Humidity: " + twoHumidity + "%";
                twoEl.appendChild(humidityTwo);

                var currentIcon = document.getElementById('day2');
                var imgEl = document.createElement('img');
                imgEl.src = src="https://openweathermap.org/img/wn/" + icon2 + "@2x.png";
                currentIcon.append(imgEl);

                //day 3
                var threeTemp = data.list[16].main.temp;
                var threeWind = data.list[16].wind.speed;
                var threeHumidity = data.list[16].main.humidity;
                var icon3 = data.list[16].weather[0].icon;

                var tempThree = document.createElement("p");
                tempThree.textContent = "Temp: " + threeTemp + "°C";
                threeEl.append(tempThree);

                var windThree = document.createElement("p");
                windThree.textContent = "Wind: " + threeWind + "MPH";
                threeEl.appendChild(windThree);

                var humidityThree = document.createElement("p");
                humidityThree.textContent = "Humidity: " + threeHumidity + "%";
                threeEl.appendChild(humidityThree);

                var currentIcon = document.getElementById('day3');
                var imgEl = document.createElement('img');
                imgEl.src = src="https://openweathermap.org/img/wn/" + icon3 + "@2x.png";
                currentIcon.append(imgEl);

                //day 4
                var fourTemp = data.list[24].main.temp;
                var fourWind = data.list[24].wind.speed;
                var fourHumidity = data.list[24].main.humidity;
                var icon4 = data.list[24].weather[0].icon;

                var tempFour = document.createElement("p");
                tempFour.textContent = "Temp: " + fourTemp + "°C";
                fourEl.append(tempFour);

                var windFour = document.createElement("p");
                windFour.textContent = "Wind: " + fourWind + "MPH";
                fourEl.appendChild(windFour);

                var humidityFour = document.createElement("p");
                humidityFour.textContent = "Humidity: " + fourHumidity + "%";
                fourEl.appendChild(humidityFour);

                var currentIcon = document.getElementById('day4');
                var imgEl = document.createElement('img');
                imgEl.src = src="https://openweathermap.org/img/wn/" + icon4 + "@2x.png";
                currentIcon.append(imgEl);

                //day 5
                var fiveTemp = data.list[32].main.temp;
                var fiveWind = data.list[32].wind.speed;
                var fiveHumidity = data.list[32].main.humidity;
                var icon5 = data.list[32].weather[0].icon;

                var tempFive = document.createElement("p");
                tempFive.textContent = "Temp: " + fiveTemp + "°C";
                fiveEl.append(tempFive);

                var windFive = document.createElement("p");
                windFive.textContent = "Wind: " + fiveWind + "MPH";
                fiveEl.appendChild(windFive);

                var humidityfive = document.createElement("p");
                humidityfive.textContent = "Humidity: " + fiveHumidity + "%";
                fiveEl.appendChild(humidityfive);

                var currentIcon = document.getElementById('day5');
                var imgEl = document.createElement('img');
                imgEl.src = src="https://openweathermap.org/img/wn/" + icon5 + "@2x.png";
                currentIcon.append(imgEl);
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

    var cities = document.createElement("p");
    cities.textContent = city;
    searchedCities.appendChild(cities);


    searchedCities.appendChild(cityEl);

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
    getCity(inputEl);

    localStorage.setItem("city:", inputEl);
});


localStorage.getItem(inputEl);