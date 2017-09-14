
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export function increase() {
  return {
    type: INCREMENT
  }
}

export function decrease() {
  return {
    type: DECREMENT
  }
}


const initState = {
  value: 0,
  proceessing: false
}
export default function counter(state = initState, action) {
  switch (action.type) {
  case 'INCREMENT':
    return {
    ...state,
    value: ++state.value
  }
  case 'DECREMENT':
    return {
    ...state,
    value: --state.value
  }
  default:
    return state
  }
}
