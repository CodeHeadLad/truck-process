input.onButtonPressed(Button.A, function () {
    Kitronik_Robotics_Board.allOff()
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    music.stopAllSounds()
    music.setVolume(0)
})
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
    music.setVolume(27)
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
})
/**
 * https://makecode.microbit.org/projects/soil-moisture/code
 */
let Girls_Reservoir_MP = 0
let Girls_Pump_MP = 0
let Boys_Reservoir_MP = 0
let Boys_Pump_MP = 0
pins.setAudioPinEnabled(false)
radio.setGroup(1)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
basic.showIcon(IconNames.Yes)
radio.setTransmitPower(7)
basic.forever(function () {
    Boys_Pump_MP = pins.analogReadPin(AnalogPin.P0)
    Boys_Reservoir_MP = pins.analogReadPin(AnalogPin.P2)
    Girls_Pump_MP = pins.analogReadPin(AnalogPin.P3)
    Girls_Reservoir_MP = pins.analogReadPin(AnalogPin.P4)
    if (Boys_Pump_MP > 850) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
        basic.showNumber(0)
    } else {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        basic.showIcon(IconNames.No)
    }
    if (Boys_Reservoir_MP > 850) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            . # # # .
            . # . # .
            `)
        basic.showNumber(2)
        music.setVolume(123)
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    if (Girls_Pump_MP > 850) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
        basic.showNumber(3)
    } else {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
    }
    if (Girls_Reservoir_MP > 850) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showNumber(4)
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(311, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(311, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(220, music.beat(BeatFraction.Whole))
    } else {
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
    basic.pause(100)
})
