'use strict';

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode = true;
  }

  start() {
    this.isOn = true;
    this.temperature = 20;
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

  maximumTemperature() {
    if (this.getPowerSavingMode()) {
      this.MAXIMUM_TEMPERATURE = 25;
    } else {
      this.MAXIMUM_TEMPERATURE = 32;
    }
  }

  isMaximumTemperature() {
    this.maximumTemperature();
    return this.temperature === this.MAXIMUM_TEMPERATURE;
  }

}
