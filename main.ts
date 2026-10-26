let Num2 = 0
let Num1 = 0
input.onButtonPressed(Button.A, function () {
    let numero_multiplicar = 0
    Num2 = 0
    Num1 = 0
    basic.showString("Ingrese un numero".charAt(numero_multiplicar))
    basic.showNumber(numero_multiplicar)
    for (let index = 0; index < 9; index++) {
        Num1 = 0
        basic.showNumber(Num1 + 1)
        basic.pause(500)
        Num2 = 0
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showNumber(Num2 + 1)
        basic.pause(500)
        basic.showNumber(numero_multiplicar)
    }
})
