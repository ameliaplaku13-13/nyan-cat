basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.LoopingInBackground)
        for (let index = 0; index < 2000; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    }
})
