//apiKey
var apiKey = '&appid=cdfd988711c5e45cb4fa89bc12acf0e7';


var inputEl = document.querySelector('.input');
var searchBtnEl = document.querySelector('.btn');
var citiesListEl = document.querySelector(".cities-list");
var currentCity = document.querySelector(".curCity")
var dayOf = document.querySelector(".dayof");
var day1EL = document.querySelector(".day1");
var day2EL = document.querySelector(".day2");
var day3EL = document.querySelector(".day3");
var day4EL = document.querySelector(".day4");
var day5EL =document.querySelector(".day5");
var listofCities = [];


// gets the cityName in localStorage and sets it to the variable
var cityName = localStorage.getItem('cityName');

// URL for current day parameters (city name + weather units of measurements)
var URLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=imperial' + apiKey;
var URLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + '&units=imperial' + apiKey;

var today = new Date();
var datenum = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
// Displays the date

// Current Day Forecast function
$.ajax ({
    url: URLWeather,
    method: "GET"
})
    .then(function(response) {

        // adds the CURRENT weather to the top of the page
        var cityvar = document.createElement("h2");
        cityvar.append(response.name + " " + "(" + datenum + ")");
        currentCity.appendChild(cityvar);
        var currentIcon = document.createElement("img");
        currentIcon.src="https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        cityvar.appendChild(currentIcon);
        var tempvar = document.createElement("p");
        tempvar.append("Temperature: " + response.main.temp + " F");
        cityvar.appendChild(tempvar);
        var windvar = document.createElement("p");
        windvar.append("Wind Speed: " + response.wind.speed + " MPH");
        cityvar.appendChild(windvar);
        var humvar = document.createElement("p");
        humvar.append("Humidity: " + response.main.humidity + "%");
        cityvar.appendChild(humvar);


        // URL for UV Index
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var queryURLUv = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + apiKey;

        
        // Uv Index function
        $.ajax ({
            url: queryURLUv,
            method: "GET"
        })
            .then(function(response) {
                var uvValue = response.value

                // Add uv Index info to page
                var uvvar = document.createElement("p");
                uvvar.append("UV Index: " + response.value);
                uvvar.style.setProperty('background-color', uvCheck(uvValue));
                uvvar.style.setProperty('width',  '50%');
                uvvar.style.setProperty('border-radius', '10px');
                uvvar.style.setProperty('text-align', 'center');
                cityvar.appendChild(uvvar);
            });
    });

// Index color function
function uvCheck(uvValue, colorbgd) {
    var colorbgd = "";
    if (uvValue <= 2) {
        colorbgd = "#66ff00";
    }
    else if (uvValue <= 4 && uvValue > 2) {
        colorbgd = "#ffbb00";
    }
    else if (uvValue >= 6 || uvValue == 5) {
        colorbgd = "#FF0000";
    }
    return colorbgd;
}


$.ajax ({
    url: URLForecast,
    method: "GET"
})

    .then(function (response) {
        var dayTag1 = document.createElement("strong");
        var tempTag1 = document.createElement("p");
        var windTag1 = document.createElement("p");
        var humTag1 = document.createElement("p");
        var imgTag1 = document.createElement("img");
        imgTag1.src= "https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png";
        var dayOne = moment(response.list[0].dt_txt).format("ddd, MMM D");
        dayTag1.append(dayOne);
        tempTag1.append("Temp: " + response.list[0].main.temp + " F");
        windTag1.append("Wind: " + response.list[0].wind.speed + "MPH");
        humTag1.append("Humidity: " + response.list[0].main.humidity + "%");
        day1EL.appendChild(dayTag1);
        day1EL.appendChild(dayTag1);
        day1EL.appendChild(imgTag1);
        day1EL.appendChild(tempTag1);
        day1EL.appendChild(windTag1);
        day1EL.appendChild(humTag1);

        var dayTag2 = document.createElement("Strong");
        var tempTag2 = document.createElement("p");
        var windTag2 = document.createElement("p");
        var humTag2 = document.createElement("p");
        var imgTag2 = document.createElement("img");
        imgTag2.src= "https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png";
        var dayTwo = moment(response.list[8].dt_txt).format("ddd, MMM D");
        dayTag2.append(dayTwo);
        tempTag2.append("Temp: " + response.list[8].main.temp + " F");
        windTag2.append("Wind: " + response.list[8].wind.speed + "MPH");
        humTag2.append("Humidity: " + response.list[8].main.humidity + "%");
        day2EL.appendChild(dayTag2);
        day2EL.appendChild(dayTag2);
        day2EL.appendChild(imgTag2);
        day2EL.appendChild(tempTag2);
        day2EL.appendChild(windTag2);
        day2EL.appendChild(humTag2);

        var dayTag3 = document.createElement("Strong");
        var tempTag3 = document.createElement("p");
        var windTag3 = document.createElement("p");
        var humTag3 = document.createElement("p");
        var imgTag3 = document.createElement("img");
        imgTag3.src= "https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png";
        var dayThree = moment(response.list[16].dt_txt).format("ddd, MMM D");
        dayTag3.append(dayThree);
        tempTag3.append("Temp: " + response.list[16].main.temp + " F");
        windTag3.append("Wind: " + response.list[16].wind.speed + "MPH");
        humTag3.append("Humidity: " + response.list[16].main.humidity + "%");
        day3EL.appendChild(dayTag3);
        day3EL.appendChild(dayTag3);
        day3EL.appendChild(imgTag3);
        day3EL.appendChild(tempTag3);
        day3EL.appendChild(windTag3);
        day3EL.appendChild(humTag3);

        var dayTag4 = document.createElement("Strong");
        var tempTag4 = document.createElement("p");
        var windTag4 = document.createElement("p");
        var humTag4 = document.createElement("p");
        var imgTag4 = document.createElement("img");
        imgTag4.src= "https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png";
        var dayFour = moment(response.list[24].dt_txt).format("ddd, MMM D");
        dayTag4.append(dayFour);
        tempTag4.append("Temp: " + response.list[24].main.temp + " F");
        windTag4.append("Wind: " + response.list[24].wind.speed + "MPH");
        humTag4.append("Humidity: " + response.list[24].main.humidity + "%");
        day4EL.appendChild(dayTag4);
        day4EL.appendChild(dayTag4);
        day4EL.appendChild(imgTag4);
        day4EL.appendChild(tempTag4);
        day4EL.appendChild(windTag4);
        day4EL.appendChild(humTag4);

        var dayTag5 = document.createElement("Strong");
        var tempTag5 = document.createElement("p");
        var windTag5 = document.createElement("p");
        var humTag5 = document.createElement("p");
        var imgTag5 = document.createElement("img");
        imgTag5.src= "https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png";
        var dayFive = moment(response.list[32].dt_txt).format("ddd, MMM D");
        dayTag5.append(dayFive);
        tempTag5.append("Temp: " + response.list[32].main.temp + " F");
        windTag5.append("Wind: " + response.list[32].wind.speed + "MPH");
        humTag5.append("Humidity: " + response.list[32].main.humidity + "%");
        day5EL.appendChild(dayTag5);
        day5EL.appendChild(dayTag5);
        day5EL.appendChild(imgTag5);
        day5EL.appendChild(tempTag5);
        day5EL.appendChild(windTag5);
        day5EL.appendChild(humTag5);
    });
    // Sets the input value in localStorage
function recordCityData() {
    listofCities.push(inputEl.value);
    console.log(listofCities);
    localStorage.setItem("cityName", inputEl.value);
    for (var i = 0; i < localStorage.length; i++) {
        var tag = document.createElement("p");
        tag.append(localStorage.getItem(localStorage.key(i)))
        citiesListEl.appendChild(tag);
        }
}





// Event Listener for search button
searchBtnEl.addEventListener('click', recordCityData);