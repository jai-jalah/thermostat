'use strict';

class Thermostat {
  
  constructor() {
    this.isOn = false;
  }

  getIsOn() {
    return this.isOn;
  }

  start() {
    this.isOn = true;
  }

}