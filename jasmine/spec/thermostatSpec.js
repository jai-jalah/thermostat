'use strict';

describe ('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    thermostat.start();
  });

  describe ('starts the thermostat', function() {

    it('checks if thermostat is on', function() {
      expect(thermostat.getIsOn()).toBe(true);
    });

    it('checks that thermostat is at 20 degrees', function() {
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe ('changes temperature', function() {
    it('should increase the temperature', function() {
      thermostat.up(5);
      expect(thermostat.getTemperature()).toEqual(25);
    });

    it('should decrease the temperature', function() {
      thermostat.down(5);
      expect(thermostat.getTemperature()).toEqual(15);
    });
  });

  describe ('minimum temperature', function() {
    it('should set minimum temperature to 10 degrees', function() {
      var i;
      for (i = 0; i < 11; i++) {
        thermostat.down(1);
      }
      expect(thermostat.getTemperature()).toEqual(10);
    });
  });
});
