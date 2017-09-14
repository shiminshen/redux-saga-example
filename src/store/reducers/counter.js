
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

export default function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}
