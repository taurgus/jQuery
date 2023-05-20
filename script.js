$(document).ready(function() {
  $('#saanappi').click(function() {
    var city = $('#location').val();
    
    // API pyyntö openweatheriin
    $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/weather',
      data: {
        q: city,
        appid: '5c69cea1adcc7b793afeaf500214c0c5', 
        units: 'metric', 
        lang: 'fi'
      },
      //
      success: function(response) {
        var weatherIcon = response.weather[0].icon;
        var weatherInfo = '<div class="weather-info-item">Sää paikassa: ' + city + '<br>';
        weatherInfo += '<div class="weather-info-item">Maa: ' + response.sys.country + '<br>';
        weatherInfo += '<div class="weather-info-item">Lämpötila: ' + response.main.temp + '°C<br>';
        weatherInfo += '<div class="weather-info-item">Ilmankosteus: ' + response.main.humidity + '%<br>';
        weatherInfo += '<div class="weather-info-item">Tuulennopeus: ' + response.wind.speed + ' m/s<br>';
        weatherInfo += '<div class="weather-info-item">Pilvisyys: ' + response.clouds.all + '%<br>';
        weatherInfo += '<div class="weather-info-item">Taivas: ' + response.weather[0].description + '<br>';
        weatherInfo += '<img src="http://openweathermap.org/img/w/' + weatherIcon + '.png">';

        
        
        $('#weather-info').html(weatherInfo);
                $('#weather-info').hide().slideDown(500);

        $('.weather-info-item').hide().fadeIn(800, 'swing');
      },
      //Error functiolla ilmoitus, jos kaupunkia ei löydy tms.
      error: function() {
        $('#weather-info').html('Virhe haettaessa säädataa.');
      }
    });
  });
});
