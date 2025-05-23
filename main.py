
Dices = [4, 6, 8, 10, 12, 20]
Dice = 0
Roll = 0
DiceSelected = False

def on_button_pressed_b():
    Dice += 1
    if Dice > 5:
        Dice = 0

def on_forever():
    input.on_button_pressed(Button.B, on_button_pressed_b)

    if DiceSelected:
        basic.show_number(Roll)
    else:
        basic.show_number(Dices[Dice])

basic.forever(on_forever)