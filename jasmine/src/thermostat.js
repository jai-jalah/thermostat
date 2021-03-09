'use strict';

class Thermostat {

  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;

    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;

    this.LOW_ENERGY_USAGE_MAX = 18;
    this.MEDIUM_ENERGY_USAGE_MAX = 25;
    this.HIGH_ENERGY_USAGE_MIN = 25;

    this.powerSavingMode = true;
  }

  start() {
    this.isOn = true;
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  getIsOn() {
    return this.isOn;
  }

  getTemperature() {
    return this.temperature;
  }

  up(temp) {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += temp;
  }

  down(temp) {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= temp;
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  powerSavingOn() {
    this.powerSavingMode = true;
  }

  powerSavingOff() {
    this.powerSavingMode = false;
  }

  getPowerSavingMode() {
    return this.powerSavingMode;
  }

  isMaximumTemperature() {
    if (this.getPowerSavingMode()) {
      return this.temperature === this.MAX_TEMP_PSM_ON;
    } else {
      return this.temperature === this.MAX_TEMP_PSM_OFF;
    }
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.getTemperature() < this.LOW_ENERGY_USAGE_MAX) {
      return 'low-usage';
    }
    else if (this.getTemperature() <= this.MEDIUM_ENERGY_USAGE_MAX) {
      return 'medium-usage';
    }
    else if (this.getTemperature() > this.HIGH_ENERGY_USAGE_MIN) {
      return 'high-usage';
    }
  }

}
