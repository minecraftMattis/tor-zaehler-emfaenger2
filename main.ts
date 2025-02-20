radio.onReceivedNumber(function (receivedNumber) {
    tor = tor + receivedNumber
})
let tor = 0
tor = 0
radio.setGroup(0)
basic.forever(function () {
    basic.showNumber(tor)
})
