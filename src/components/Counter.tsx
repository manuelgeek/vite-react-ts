import { useAppSelector, useAppDispatch } from '../hooks';
import { decrement, increment } from "../store/counterSlice"

export function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return(
    <div>
      <div className={'space-x-3'}>
        <button
          className={'bg-red-500 p-2 rounded'}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span className={'chip'}>{count}</span>
        <button
          className={'bg-green-500 p-2 rounded'}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  )
}
