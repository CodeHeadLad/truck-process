def on_received_number(receivedNumber):
    basic.show_icon(IconNames.YES)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(0)
    Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR1,
        Kitronik_Robotics_Board.MotorDirection.FORWARD,
        85)
    Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR2,
        Kitronik_Robotics_Board.MotorDirection.FORWARD,
        46)
    Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 90)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Kitronik_Robotics_Board.all_off()
    Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 0)
    basic.show_icon(IconNames.TORTOISE)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    radio.raise_event(EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_EVT_ANY)
basic.forever(on_forever)
