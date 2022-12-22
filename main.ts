input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P14, 180)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P14, 90)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P14, 0)
    basic.pause(1000)
})
