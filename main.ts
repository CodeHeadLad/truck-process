radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 30)
        basic.showArrow(ArrowNames.North)
    }
    if (receivedString == "reverse") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 30)
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
    if (receivedString == "centered") {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
        basic.showArrow(ArrowNames.North)
    }
    if (receivedString == "stop") {
        Kitronik_Robotics_Board.allOff()
    }
    radio.sendNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Robotics_Board.allOff()
})
let reading = 0
radio.setGroup(1)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
basic.showIcon(IconNames.Yes)
radio.setTransmitPower(7)
/**
 * https://makecode.microbit.org/projects/soil-moisture/code
 */
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading < 500) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 30)
        basic.showIcon(IconNames.SmallSquare)
    } else {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        basic.showIcon(IconNames.Square)
    }
    basic.pause(100)
})
