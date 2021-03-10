# Thermostat

## User Stories

### User Story 1
- Thermostat starts at 20 degrees
```
As a user
So that I can set the temperature of my room
I want to start the thermostat
```
### Plan
start thermostat > thermostat.isOn() > true

### User Story 2
- Thermostat starts at 20 degrees
```
As a user
So that I can set the temperature of my room
I want to see that the thermostat is automatically at 20 degrees when it starts
```
### Plan
start thermostat > thermostat_temperature > 20

### User Story 3
- You can increase the temperature with an up function
```
As a user
So that I can increase the temperature
I want to increase using an up function
```
### Plan
up(temperature) > thermostat_temperature += temperature

### User Story 4
- You can decrease the temperature with a down function
```
As a user
So that I can decrease the temperature
I want to decrease using a down function
```
### Plan
down(temperature) > thermostat_temperature -= temperature

### User Story 5
- The minimum temperature is 10 degrees
```
As a user
So that my room doesn't get too cold
I want the thermostat's minimum temperature to be 10 degrees
```
### Plan
Thermostat constructor > const min_temp = 10 > decrease(temp) cannot go below min_temp

### User Story 6
- If power saving mode is on, the maximum temperature is 25 degrees
```
As a user
When power saving mode is on
I want the maximum temperature to set to 25 degrees
```
### Plan
power_saving_mode > on > maximum temperature = 25

### User Story 7
- If power saving mode is off, the maximum temperature is 32 degrees
```
As a user
When power saving mode is off
I want the maximum temperature to set to 32 degrees
```
### Plan
power_saving_mode > off > maximum temperature = 32

### User Story 8
- Power saving mode is on by default but it can also be turned off
```
As a user
So I can assume that my thermostat is saving power
I want power saving mode on by default
```
```
As a user
So I can easily affect my maximum temperature
I want to be able to turn off power saving mode
```
### Plan
constructor { powerSavingMode = true}
powerSavingOff > powerSavingMode = false

### User Story 9
- You can reset the temperature to 20 with a reset function
```
As a user
So that I can easily reset my current temperature
I want the a reset function that sets my temperature back to 20 degrees
```
### Plan
reset() > temperature = 20

### User Story 10
- You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
```
As a user
So that I can monitor my energy usage
I want to be able to check my current energy usage level
```
### Plan
energyUsage()
  getTemperature < 18 return low-usage, else if <= 25 return medium-usage, else return high-usage

## Interface Plans

Functions to add to the interface:
- 'Start thermostat' = thermostat.start()
- '+' = thermostat.up()
- '-' = thermostat.down()
- 'Reset temperature' = thermostat.reset()
- 'Turn Power Saving on' = thermostat.powerSavingOn()
- 'Turn Power Saving off' = thermostat.powerSavingOff()
- 'Power Saving Mode is on/off' = thermostat.getPowerSavingMode()
