radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 46)
        basic.showArrow(ArrowNames.North)
    }
    if (receivedString == "reverse") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 46)
        basic.showArrow(ArrowNames.South)
    }
    if (receivedString == "right") {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 135)
        basic.showArrow(ArrowNames.East)
    }
    if (receivedString == "left") {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 45)
        basic.showArrow(ArrowNames.West)
    }
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Robotics_Board.allOff()
})
// https://makecode.microbit.org/projects/soil-moisture/code
let reading = 0
radio.setGroup(1)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    basic.pause(5000)
})
