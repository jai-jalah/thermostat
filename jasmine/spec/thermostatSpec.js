'use strict';

describe ('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe ('starts the thermostat', function() {

    beforeEach(function() {
      thermostat.start();
    });

    it('checks if thermostat is on', function() {
      expect(thermostat.getIsOn()).toBe(true);
    });

    it('checks that thermostat is at 20 degrees', function() {
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

});
