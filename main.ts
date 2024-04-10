let sp2 = 0
let sp1 = 0
Microbit.init()
basic.forever(function () {
    if (Microbit.farState(Write_pin.w0) == 0) {
        sp1 = input.runningTime()
    }
    if (Microbit.farState(Write_pin.w2) == 0) {
        sp2 = input.runningTime()
    }
    if (sp1 > sp2) {
        Microbit.showNumber(Oled.oled16, 2)
        Microbit.showNumber(Oled.oled22, 1)
    } else if (sp1 == sp2) {
        Microbit.showNumber(Oled.oled16, 1)
        Microbit.showNumber(Oled.oled22, 1)
    } else {
        Microbit.showNumber(Oled.oled16, 1)
        Microbit.showNumber(Oled.oled22, 2)
    }
    sp1 = 0
    sp2 = 0
})
