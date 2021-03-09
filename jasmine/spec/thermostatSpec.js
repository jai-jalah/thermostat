'use strict';

describe ('Thermostat', function() {

  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe ('starts the thermostat', function() {
    
    it('checks if thermostat is on', function() {
      thermostat.start(); 
      expect(thermostat.getIsOn()).toBe(true);
    });
  });

});