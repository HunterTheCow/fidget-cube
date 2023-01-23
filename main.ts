input.onButtonPressed(Button.A, function () {
    Hand = 0
    if (Hand == randint(1, 4)) {
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
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . # # #
        . . # # #
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
    _3 = randint(1, 13)
    if (Hand == 13) {
        basic.showIcon(IconNames.SmallHeart)
    } else if (Hand == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (Hand == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (Hand == 3) {
        basic.showIcon(IconNames.Confused)
    } else if (Hand == 4) {
        basic.showIcon(IconNames.Sad)
    } else if (Hand == 5) {
        basic.showIcon(IconNames.Angry)
    } else if (Hand == 6) {
        basic.showIcon(IconNames.Asleep)
    } else if (Hand == 7) {
        basic.showIcon(IconNames.Surprised)
    } else if (Hand == 8) {
        basic.showIcon(IconNames.Skull)
    } else if (Hand == 9) {
        basic.showIcon(IconNames.Silly)
    } else if (Hand == 10) {
        basic.showIcon(IconNames.Ghost)
    } else if (Hand == 11) {
        basic.showIcon(IconNames.Fabulous)
    } else if (Hand == 12) {
        basic.showIcon(IconNames.Meh)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 10))
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showLeds(`
        # # # . .
        # # # . .
        # # . . .
        # # . . .
        # # . . .
        `)
})
let Hand = 0
let _3 = 0
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
basic.forever(function () {
	
})
