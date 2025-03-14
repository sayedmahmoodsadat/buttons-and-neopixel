input.onPinPressed(TouchPin.P2, function () {
    huenum += 40
    if (huenum < 0) {
        huenum = 255
    }
    strip.showColor(neopixel.hsl(huenum, 355, 50))
    basic.showIcon(IconNames.Ghost)
    basic.showString("Press Again")
})
input.onPinPressed(TouchPin.P1, function () {
    huenum += 20
    if (huenum == 255) {
        huenum = 0
    }
    strip.showColor(neopixel.hsl(huenum, 255, 50))
    basic.showIcon(IconNames.Giraffe)
    basic.showIcon(IconNames.Angry)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
})
let huenum = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGBW)
strip.showColor(neopixel.hsl(huenum, 255, 50))
