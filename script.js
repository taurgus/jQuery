$(document).ready(function() {
  $('#saanappi').click(function() {
    var city = $('#location').val();
    
    // API pyyntö openweatheriin
    $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/weather',
      data: {
        q: city,
        appid: '5c69cea1adcc7b793afeaf500214c0c5', 
        units: 'metric' 
      },
      success: function(response) {
        var weatherIcon = response.weather[0].icon;
        var weatherInfo = 'Maa: ' + response.sys.country + '<br>';
        weatherInfo += 'Lämpötila: ' + response.main.temp + '°C<br>';
        weatherInfo += 'Ilmankosteus: ' + response.main.humidity + '%<br>';
        weatherInfo += 'Tuulennopeus: ' + response.wind.speed + ' m/s<br>';
        weatherInfo += 'Pilvisyys: ' + response.clouds.all + '%<br>';
        weatherInfo += 'Taivas: ' + response.weather[0].description + '<br>';
        weatherInfo += '<img src="http://openweathermap.org/img/w/' + weatherIcon + '.png">';

        
        
        $('#weather-info').html(weatherInfo);
      },
      error: function() {
        $('#weather-info').html('Virhe haettaessa säädataa.');
      }
    });
  });
});
