input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P14, 180)
})
input.onPinPressed(TouchPin.P2, function () {
    pins.servoWritePin(AnalogPin.P14, 0)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P14, 90)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P14, 0)
})
input.onPinPressed(TouchPin.P1, function () {
    pins.servoWritePin(AnalogPin.P14, 180)
})
basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P1))) {
        pins.servoWritePin(AnalogPin.P14, 90)
    } else if (!(input.pinIsPressed(TouchPin.P2))) {
        pins.servoWritePin(AnalogPin.P14, 90)
    } else {
    	
    }
})
