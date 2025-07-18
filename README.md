# fwd-smart-hydroponics

Smart Hydroponics Kit, by Forward Education.

Find us at [forwardedu.com](https://forwardedu.com/) and [learn.forwardedu.com](https://learn.forwardedu.com/). Learn more about the Smart Hydroponics Kit on the [product page](https://forwardedu.com/products/smart-hydroponics-kit).

### ~ reminder

![works with micro:bit V2 only image](/static/v2/v2-only.png)

These blocks require the [micro:bit V2](/device/v2). If you use them with a V1 micro:bit you will see the 927 error code on the screen.

### ~

## Example Usage

Our learning systems are designed to simplify teaching coding and computer science for educators at all experience levels.
Our Smart Hydroponics Kit can be used on its own or joined with other kits to access our wider library of sensors, motors, lights, and buttons.
Check out our libraries of [lessons](https://learn.forwardedu.com/lesson-library), [projects](https://learn.forwardedu.com/projects/), and [tutorials](https://learn.forwardedu.com/tutorials/). A sample of coding with the Smart Hydroponics Kit can be seen below.

The light controller, pH sensor, float sensor, and water pump help create and maintain ideal growing conditions. When a water level drop is detected by the float sensor the pump kicks on and adds water until the float sensor says to stop. If the pH sensor detected abnormal conditions then it sends a visual indicator through the micro:bit display.

```blocks
lights.lights1.setBrightness(100)
basic.forever(function () {
    if (sensors.float1.floatStateConditional(sensors.FloatState.raised)) {
        motors.pump.setOn(false)
    } else {
        motors.pump.setOn(true)
    }
    if (sensors.ph1.isPastThreshold(8, sensors.ThresholdDirection.Over) || sensors.temperature1.isPastThreshold(32, sensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Confused)
    }
})
```

Using the (datalogger extension)[https://makecode.microbit.org/reference/datalogger] the pH can be logged at the desired frequency to observe trends. Here a log is created every minute.

```blocks
basic.forever(function () {
    datalogger.log(datalogger.createCV("pH", fwdSensors.ph1.ph()))
    basic.pause(60000)
})
```

## Supported Targets

-   for PXT/microbit

## License

MIT
