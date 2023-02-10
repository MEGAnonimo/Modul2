input.onButtonPressed(Button.A, function () {
    crono += 1
})
input.onGesture(Gesture.Shake, function () {
    pasos += 1
})
input.onButtonPressed(Button.B, function () {
    crono += 1
    basic.showString("" + (temp))
})
let temp = 0
let pasos = 0
temp = 0
let crono = 0
basic.forever(function () {
    if (crono == 1) {
        temp += 1
        basic.pause(1000)
    }
})
