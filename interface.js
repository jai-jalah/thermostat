$(document).ready(function() {
  $('#temperature').text('hello jQuery world!');

  var thermostat = new Thermostat();
  updateTemperature();

  $('start-thermostat').on('click', function(){
    thermostat.start();
    updateTemperature();
  });

  $('#temperature-up').on('click', function() {
    thermostat.up(1);
    updateTemperature();
  });

  $('#temperature-down').on('click', function() {
    thermostat.down(1);
    updateTemperature();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#power-saving-on').on('click', function() {
    thermostat.powerSavingOn();
    $('#power-saving-status').text('on')
    updateTemperature;
  });

  $('#power-saving-off').on('click', function() {
    thermostat.powerSavingOff();
    $('#power-saving-status').text('off')
    updateTemperature;
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});

$.get('{api_key}', function(data) {
$('#current-temperature').text(data.main.temp);

displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

function displayWeather(city) {
 var url = '{api_key}' + city;
 var token = '{api_token}';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
   $('#current-temperature').text(data.main.temp);
 })
})
