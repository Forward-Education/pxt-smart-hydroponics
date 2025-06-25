// It's hectic to run all the tests simultaneously.
// Add pH simulator. Remove pH and add lightbulb and button (float) simulators.

// pH tests
// ph(): number
// isPastThreshold(threshold: number, direction: ThresholdDirection): boolean
// calibrate(standard1: number, reading1: number, standard2: number, reading2: number): void
console.log("ph: " + fwdSensors.ph1.ph())
input.onButtonPressed(Button.A, function () {
    if (fwdSensors.ph1.isPastThreshold(7, fwdEnums.OverUnder.Over)) {
        console.log(fwdSensors.ph1.ph() + " is over 7")
    }
    if (fwdSensors.ph1.isPastThreshold(7, fwdEnums.OverUnder.Under)) {
        console.log(fwdSensors.ph1.ph() + " is under 7")
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    fwdSensors.ph1.calibrate(4, 5, 7, 8)
})

// lights tests
// setBrightness(value: number)
basic.forever(() => {
    console.log("Test Start")
    console.log(
        "The brightness is changing every second for 6 seconds, but the Jacdac simulator only shows on / off."
    )
    basic.pause(1000)
    fwdLights.lights1.setBrightness(100)
    console.log("Light on? " + fwdLights.lights1.isOn())
    basic.pause(1000)
    fwdLights.lights1.setBrightness(75)
    basic.pause(1000)
    fwdLights.lights1.setBrightness(50)
    basic.pause(1000)
    fwdLights.lights1.setBrightness(25)
    basic.pause(1000)
    fwdLights.lights1.setBrightness(10)
    basic.pause(1000)
    fwdLights.lights1.setBrightness(0)
    console.log("Light on? " + fwdLights.lights1.isOn())
    console.log("Test End")
})

// float tests
// onFloatChange(state: FloatState, handler: () => void)
// floatStateConditional(state: FloatState): boolean
// floatState(): string
fwdSensors.float1.onFloatChange(fwdEnums.RaisedLowered.Raised, () => {
    console.log("Event: raised")
})
fwdSensors.float1.onFloatChange(fwdEnums.RaisedLowered.Lowered, () => {
    console.log("Event: lowered")
})
basic.forever(() => {
    if (
        fwdSensors.float1.floatStateConditional(fwdEnums.RaisedLowered.Raised)
    ) {
        console.log("State: " + fwdSensors.float1.floatState())
    }
    if (
        fwdSensors.float1.floatStateConditional(fwdEnums.RaisedLowered.Lowered)
    ) {
        console.log("State: " + fwdSensors.float1.floatState())
    }
    basic.pause(1000)
})

// pump tests
// isOn(): boolean
// setOn(on: boolean): void
// timedRun(duration: number): void
// setOn() is used in timedRun, so it is covered by timedRun() test
basic.forever(() => {
    console.log("Pump on? " + fwdMotors.pump.isOn())
    console.log("Run pump for 3s.")
    fwdMotors.pump.timedRun(3)
    basic.pause(1000)
    console.log("1s... Pump on? " + fwdMotors.pump.isOn())
    basic.pause(1000)
    console.log("2s... Pump on? " + fwdMotors.pump.isOn())
    basic.pause(1000)
    console.log("3s... Pump on? " + fwdMotors.pump.isOn())
})
