$('document').ready(function () {
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Athens&mode=json&units=metric&cnt=10&APPID=7b61b6fe8aad0df66039cc4c2eba23fa";
    $.getJSON(url, function (data) {
        var WeatherReport = function () {
            this.weather = data.list[0].weather[0].description;
            this.wind = data.list[0].speed;
            this.temp = data.list[0].temp.day;
            this.time = new Date();
        };
        
        console.log(data.list);
        
        try {
            $("#weatherReportHideShow").mouseover(function () {
                $("#weatherReportLetsHide").slideDown(2500);
            });
        } catch (error) {
            console.log("Error in showing the weather report. ");
        };
        
        try {
            $("#weatherReportLetsHide").mouseleave(function () {
               $("#weatherReportLetsHide").slideUp(2500); 
            });
        } catch (error1) {
            console.log("Error in showing the weather report. ");
        };
        
        
        var athens = new WeatherReport();
        
        var weatherReport = athens.weather;
        
        
        $('#overallWeather').html(athens.weather);
        $('#temperature').html(athens.temp + " Celcius");
        $('#wind').html(athens.wind + " Wind Speed");
        $('#timeOfDay').html(athens.time.toLocaleDateString());
        
        
    });
});
