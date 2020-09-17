input.onGesture(Gesture.Shake, function () {
    basic.showString("Area del trapecio =")
    base_mayor = 20
    base_menor = 3 / 5
    Altura = randint(1, 200)
    area = (base_mayor + base_menor) / 2 * Altura
    basic.showNumber(area)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Base Menor=")
    basic.showNumber(base_menor)
    basic.showString("Base Mayor =")
    basic.showNumber(base_mayor)
    basic.showString("Altura =")
    basic.showNumber(Altura)
})
let area = 0
let Altura = 0
let base_menor = 0
let base_mayor = 0
basic.showString("Ana Cristina Sosa Corona  A01285469")
basic.forever(function () {
	
})
