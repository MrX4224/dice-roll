input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Dice += -1
    if (Dice == -1) {
        Dice = Dices.length - 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (DiceSelected) {
        DiceSelected = false
    } else {
        DiceSelected = true
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Dice += 1
    if (Dice == Dices.length) {
        Dice = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Roll = randint(1, Dices[Dice])
})
let Roll = 0
let DiceSelected = false
let Dice = 0
let Dices: number[] = []
Dices = [
4,
6,
8,
10,
12,
20,
100
]
basic.forever(function () {
    if (DiceSelected) {
        basic.showNumber(Roll)
    } else {
        basic.showNumber(Dices[Dice])
    }
})
