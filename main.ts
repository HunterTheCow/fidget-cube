input.onButtonPressed(Button.A, function () {
    Hand = randint(1, 4)
    if (Hand == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . # .
            # # # . .
            `)
    } else if (Hand == 3) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
    } else if (Hand == 4) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # . . . #
            # . . . #
            # # # # .
            `)
    }
    Hand = randint(1, 4)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # # # . #
            # . # # .
            # # # . .
            # . # # .
            # # # . #
            `)
        music.playMelody("D E G A D E G A ", 500)
        music.playMelody("D - - - C C - - ", 500)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playMelody("D C F E G A C5 C5 ", 300)
        music.playMelody("G C G C G E E C5 ", 300)
    } else if (Hand == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playMelody("B A B A B A B A ", 400)
        music.playMelody("E D E D E D E D ", 400)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 10))
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
})
let Hand = 0
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
basic.forever(function () {
	
})
