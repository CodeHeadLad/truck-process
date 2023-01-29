def on_received_string(receivedString):
    if receivedString == "forward":
        Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR2,
            Kitronik_Robotics_Board.MotorDirection.FORWARD,
            46)
        basic.show_arrow(ArrowNames.NORTH)
    if receivedString == "reverse":
        Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR2,
            Kitronik_Robotics_Board.MotorDirection.FORWARD,
            46)
        basic.show_arrow(ArrowNames.SOUTH)
    if receivedString == "right":
        Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 135)
        basic.show_arrow(ArrowNames.EAST)
    if receivedString == "left":
        Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 45)
        basic.show_arrow(ArrowNames.WEST)
    if receivedString == "centetered":
        Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 90)
        basic.show_arrow(ArrowNames.NORTH)
    radio.send_number(radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH))
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    Kitronik_Robotics_Board.all_off()
input.on_button_pressed(Button.B, on_button_pressed_b)

# https://makecode.microbit.org/projects/soil-moisture/code
reading = 0
radio.set_group(1)
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 0)
basic.show_icon(IconNames.YES)
radio.set_transmit_power(7)

def on_forever():
    global reading
    pins.analog_write_pin(AnalogPin.P1, 1023)
    reading = pins.analog_read_pin(AnalogPin.P0)
    pins.analog_write_pin(AnalogPin.P1, 0)
    if input.button_is_pressed(Button.A):
        basic.show_number(reading)
    if reading < 500:
        Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR1,
            Kitronik_Robotics_Board.MotorDirection.FORWARD,
            46)
    else:
        Kitronik_Robotics_Board.motor_off(Kitronik_Robotics_Board.Motors.MOTOR1)
    basic.pause(5000)
basic.forever(on_forever)
