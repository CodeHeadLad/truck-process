def on_received_string(receivedString):
    if receivedString == "forward":
        Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR2,
            Kitronik_Robotics_Board.MotorDirection.FORWARD,
            30)
        basic.show_arrow(ArrowNames.NORTH)
    if receivedString == "reverse":
        Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR2,
            Kitronik_Robotics_Board.MotorDirection.REVERSE,
            30)
        basic.show_arrow(ArrowNames.SOUTH)
    if receivedString == "right":
        Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 135)
        basic.show_arrow(ArrowNames.EAST)
    if receivedString == "left":
        Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 45)
        basic.show_arrow(ArrowNames.WEST)
    if receivedString == "centered":
        Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 90)
        basic.show_arrow(ArrowNames.NORTH)
    if receivedString == "stop":
        Kitronik_Robotics_Board.all_off()
    radio.send_number(radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH))
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    Kitronik_Robotics_Board.all_off()
input.on_button_pressed(Button.B, on_button_pressed_b)

Boys_Pump_MP = 0
radio.set_group(1)
Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 0)
basic.show_icon(IconNames.YES)
radio.set_transmit_power(7)
"""

https://makecode.microbit.org/projects/soil-moisture/code

"""

def on_forever():
    global Boys_Pump_MP
    pins.analog_write_pin(AnalogPin.P1, 1023)
    Boys_Pump_MP = pins.analog_read_pin(AnalogPin.P0)
    pins.analog_write_pin(AnalogPin.P1, 0)
    if input.button_is_pressed(Button.A):
        basic.show_number(Boys_Pump_MP)
    if Boys_Pump_MP < 500:
        Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR1,
            Kitronik_Robotics_Board.MotorDirection.FORWARD,
            30)
        basic.show_icon(IconNames.SMALL_SQUARE)
    else:
        Kitronik_Robotics_Board.motor_off(Kitronik_Robotics_Board.Motors.MOTOR1)
        basic.show_icon(IconNames.SQUARE)
    basic.pause(100)
basic.forever(on_forever)
