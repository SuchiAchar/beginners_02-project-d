basic.forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("C C5 D C5 E C5 F C5 ", 120)
    music.playMelody("A F E F D G E F ", 120)
    music.playMelody("C5 C5 E E C5 C5 F F ", 120)
    music.playTone(196, music.beat(BeatFraction.Breve))
    basic.pause(5000)
})
