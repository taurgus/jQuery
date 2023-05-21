$(document).ready(function() { //Dokumenttia ei voi manipuloida, jos se ei ole ready. jQuery tarkistaa tilan tällä funktiolla
  $('#weather-form').fadeIn(1500); //Animaatio sivun ladattua
  $('#saanappi').click(function() { //Klikkaamalla säänappia haetaan tiedot
    var city = $('#location').val(); //Muuttuja kaupungille/sijainnille
    
    // API pyyntö openweatheriin ja pyydetyillä spekseillä
    $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/weather', //Linkki mistä tiedot haetaan
      data: {
        q: city, //Kaupungin nimi, postinumero tai vastaava
        appid: '5c69cea1adcc7b793afeaf500214c0c5', //API key
        units: 'metric', //Tuulennopeus ja lämpötilat eurooppalaisittain
        lang: 'fi' //Kielenä suomi
      },
      //
      success: function(response) { //AJAX success functiolla saadaan säätiedot. 
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
        //Animaatiot diville ja tekstille
            
        $('#weather-info').hide().slideDown(1000);
        $('.weather-info-item').hide().fadeIn(1000, 'swing');
      },
      //Error functiolla ilmoitus, jos kaupunkia ei löydy tms.
      error: function() {
        $('#weather-info').html('Virhe haettaessa säädataa.');
      }
    });
  });
});
