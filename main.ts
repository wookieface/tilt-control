input.onButtonPressed(Button.A, function () {
    if (start == 0) {
        setChannel += 1
        basic.showNumber(setChannel)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (start == 0) {
        basic.showNumber(setChannel)
        start = 1
        radio.setGroup(setChannel)
    }
})
input.onButtonPressed(Button.B, function () {
    if (start == 0) {
        setChannel += -1
        basic.showNumber(setChannel)
    }
})
let LorR = 0
let tilt = 0
let setChannel = 0
let start = 0
start = 0
basic.showIcon(IconNames.Square)
let direction = 1
radio.setTransmitPower(7)
basic.forever(function () {
    if (start == 1) {
        tilt = input.acceleration(Dimension.Y)
        if (tilt < -800) {
            direction = 1
            basic.showString("F")
        }
        if (tilt > 800) {
            direction = 3
            basic.showString("B")
        }
        radio.sendNumber(direction)
        basic.pause(500)
        direction = 0
        LorR = input.acceleration(Dimension.X)
        if (LorR < -800) {
            direction = 4
            basic.showString("L")
        }
        if (LorR > 800) {
            direction = 3
            basic.showString("R")
        }
        radio.sendNumber(LorR)
        basic.pause(500)
        LorR = 0
    }
})
