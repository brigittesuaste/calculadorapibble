Num1 = 0
Num2 = 0

def on_button_pressed_a():
    global Num1, Num2
    numero_multiplicar = 0
    basic.show_string("\"Ingrese un numero\"".char_at(numero_multiplicar))
    basic.show_number(numero_multiplicar)
    for index in range(9):
        basic.show_number(numero_multiplicar)
        Num1 = 0
        basic.show_number(Num1 + 1)
        basic.pause(500)
        Num2 = 0
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
        basic.show_number(Num2 + 1)
        basic.pause(500)
input.on_button_pressed(Button.A, on_button_pressed_a)
