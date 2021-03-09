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
      for (var i = 0; i < 11; i++) {
        thermostat.down(1);
      }
      expect(thermostat.getTemperature()).toEqual(10);
    });
  });

  describe ('when power saving mode is on', function() {
    beforeEach(function() {
      thermostat.powerSavingOn();
    });

    it('should set powerSavingMode to true', function() {
      expect(thermostat.getPowerSavingMode()).toBe(true);
    });

    it('should set max temperature to 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up(1);
      }
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });

  describe ('when power saving mode is off', function() {

    beforeEach(function() {
      thermostat.powerSavingOff();
    });

    it('should set powerSavingMode to false', function() {
      expect(thermostat.getPowerSavingMode()).toBe(false);
    });

    it('should set max temperature to 32 degrees', function() {
      for (var i = 0; i < 13; i++) {
        thermostat.up(1);
      }
      expect(thermostat.getTemperature()).toEqual(32);
    });
  });

  describe ('power saving mode', function() {
    it('should be on by default', function() {
      expect(thermostat.getPowerSavingMode()).toBe(true);
    });
  });

  describe ('reset function', function() {
    it('should set the current temperature to 20', function() {
      thermostat.up(5)
      expect(thermostat.getTemperature()).toEqual(25);

      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe ('to check energy usage', function() {
    it('should return low-usage if temperature < 18', function() {
      thermostat.down(3);
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('should return medium-usage if temperature < 25', function() {
      thermostat.up(2);
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('should return medium-usage if temperature === 25', function() {
      thermostat.up(5);
      expect(thermostat.getTemperature()).toEqual(25);
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('should return high-usage if temperature > 25', function() {
      thermostat.up(6);
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
