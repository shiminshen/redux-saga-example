
export const INCREMENT = 'INCREMENT'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const DECREMENT = 'DECREMENT'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function incrementAsync() {
  return {
    type: INCREMENT_ASYNC
  }
}

export function decrement() {
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
    value: state.value + 1
  }
  case 'DECREMENT':
    return {
    ...state,
    value: state.value - 1
  }
  default:
    return state
  }
}
