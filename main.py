def on_received_number(receivedNumber):
    if receivedNumber == 1:
        Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR1,
            Kitronik_Robotics_Board.MotorDirection.FORWARD,
            85)
        Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR2,
            Kitronik_Robotics_Board.MotorDirection.FORWARD,
            46)
        basic.show_leds("""
            . . # . .
                        . # # # .
                        . . # . .
                        . . # . .
                        . . # . .
        """)
    if receivedNumber == 2:
        Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR1,
            Kitronik_Robotics_Board.MotorDirection.REVERSE,
            85)
        Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR2,
            Kitronik_Robotics_Board.MotorDirection.REVERSE,
            46)
        Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 45)
        basic.show_icon(IconNames.SWORD)
radio.on_received_number(on_received_number)

def on_button_pressed_b():
    Kitronik_Robotics_Board.all_off()
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(1)
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 0)
basic.show_icon(IconNames.YES)

def on_forever():
    pass
basic.forever(on_forever)
