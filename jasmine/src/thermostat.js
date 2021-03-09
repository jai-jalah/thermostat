'use strict';

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
  }

  start() {
    this.isOn = true
    this.temperature = 20
  }

  getIsOn() {
    return this.isOn;
  }

  getTemperature() {
    return this.temperature;
  }

  up(temp) {
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

}
