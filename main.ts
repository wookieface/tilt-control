let LorR = 0
let tilt = 0
let direction = 1
radio.setTransmitPower(7)
radio.setGroup(10)
basic.showString("F")
basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.X))
    tilt = input.acceleration(Dimension.Y)
    if (tilt > -800) {
        direction = 1
        basic.showString("F")
    }
    if (tilt > 800) {
        direction = 3
        basic.showString("B")
    }
    basic.pause(2000)
    LorR = input.acceleration(Dimension.X)
    if (LorR > -800) {
        direction = 4
        basic.showString("L")
    }
    if (LorR > 800) {
        direction = 3
        basic.showString("R")
    }
    radio.sendNumber(direction)
})
