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
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
})
/**
 * https://makecode.microbit.org/projects/soil-moisture/code
 */
let Girls_Reservoir_MP = 0
let Girls_Pump_MP = 0
let Boys_Reservoir_MP = 0
let Boys_Pump_MP = 0
radio.setGroup(1)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
basic.showIcon(IconNames.Yes)
radio.setTransmitPower(7)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    Boys_Pump_MP = pins.analogReadPin(AnalogPin.P0)
    Boys_Reservoir_MP = pins.analogReadPin(AnalogPin.P2)
    Girls_Pump_MP = pins.analogReadPin(AnalogPin.P3)
    Girls_Reservoir_MP = pins.analogReadPin(AnalogPin.P4)
    pins.analogWritePin(AnalogPin.P1, 0)
    if (Boys_Pump_MP > 500) {
        basic.showNumber(0)
    } else {
    	
    }
    if (Boys_Reservoir_MP > 500) {
        basic.showNumber(2)
    } else {
    	
    }
    if (Girls_Pump_MP > 500) {
        basic.showNumber(3)
    } else {
    	
    }
    if (Girls_Reservoir_MP > 500) {
        basic.showNumber(4)
    }
    basic.pause(100)
})
