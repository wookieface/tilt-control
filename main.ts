input.onButtonPressed(Button.A, function () {
    direction += 1
    if (direction == 1) {
        basic.showString("F")
    }
    if (direction == 2) {
        basic.showString("R")
    }
    if (direction == 3) {
        basic.showString("B")
    }
    if (direction == 4) {
        basic.showString("L")
    }
    if (direction > 4) {
        direction = 1
        basic.showString("F")
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(direction)
})
let direction = 0
direction = 1
radio.setTransmitPower(7)
radio.setGroup(10)
basic.showString("F")
