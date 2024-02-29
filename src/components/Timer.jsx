import { observer } from "mobx-react-lite"
import timerStore from "../store/timerStore"

const TimerView = observer(({ timer }) => {
    return (
        <div class="wrapper">
            <span className="inline-block mr-20">Seconds passed: {timer.secondsPassed}</span>
            <button onClick={() => (timer.secondsPassed = 0)}>reset</button>
        </div>
    )
})

setInterval(() => {
    timerStore.increaseTimer()
}, 1000)

export default TimerView