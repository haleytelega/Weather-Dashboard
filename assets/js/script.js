var userFormEl = document.querySelector("#user-form");

var getCurrentTemp = function () {
    var getCurrentDate = moment().format("dddd, MMMM, Do");
    console.log(getCurrentDate);
    document.getElementById("currentDay").innerHTML=getCurrentDate;
};

userFormEl.addEventListener("click", getCurrentTemp);