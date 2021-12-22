input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P14, 180)
    basic.pause(1000)
})
input.onPinPressed(TouchPin.P2, function () {
    pins.servoWritePin(AnalogPin.P15, 180)
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
input.onPinPressed(TouchPin.P1, function () {
    pins.servoWritePin(AnalogPin.P15, 180)
    basic.pause(1000)
})
basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P1))) {
    	
    } else if (!(input.pinIsPressed(TouchPin.P2))) {
        pins.servoWritePin(AnalogPin.P15, 0)
        basic.pause(100)
    } else {
    	
    }
})
