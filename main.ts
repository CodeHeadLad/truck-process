radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 85)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 46)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 2) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 85)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 46)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 45)
        basic.showIcon(IconNames.Sword)
    }
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Robotics_Board.allOff()
})
radio.setGroup(1)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
basic.showIcon(IconNames.Square)
basic.forever(function () {
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
