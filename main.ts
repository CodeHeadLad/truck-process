radio.onReceivedString(function on_received_string(receivedString: string) {
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
    
    if (receivedString == "centetered") {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
        basic.showArrow(ArrowNames.North)
    }
    
    radio.sendNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    Kitronik_Robotics_Board.allOff()
})
//  https://makecode.microbit.org/projects/soil-moisture/code
let reading = 0
radio.setGroup(1)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
basic.showIcon(IconNames.Yes)
radio.setTransmitPower(7)
basic.forever(function on_forever() {
    
    pins.analogWritePin(AnalogPin.P1, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    
    if (reading < 500) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 46)
    } else {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
    
    basic.pause(5000)
})
