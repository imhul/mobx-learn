import { observer } from "mobx-react-lite"

const TimerView = observer(({ timer }) =>
    <div class="wrapper">
        <span>Seconds passed: {timer.secondsPassed}</span>
    </div>
)

export default TimerView