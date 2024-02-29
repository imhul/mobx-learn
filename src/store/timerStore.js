import { makeAutoObservable } from "mobx"

class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }
}

const timerStore = new Timer()

setInterval(() => {
    timerStore.increaseTimer()
}, 1000)

export default timerStore