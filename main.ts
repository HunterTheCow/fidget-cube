input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # # # . #
            # . # # .
            # # # . .
            # . # # .
            # # # . #
            `)
        music.playMelody("G A E D G A E D ", 500)
        music.playMelody("F F F D F F F D ", 300)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playMelody("D C F E G A C5 C5 ", 120)
        music.playMelody("G C G C G E - C5 ", 300)
        if (Hand == 3) {
        	
        }
    }
})
let Hand = 0
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
basic.forever(function () {
	
})
