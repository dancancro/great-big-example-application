import { ActionReducer, Action } from '@ngrx/store'

export const MESSAGE_INIT = 'MESSAGE_INIT'
export const MESSAGE_UPDATE = 'MESSAGE_UPDATE'

export const reducer: ActionReducer<any> = (state = [], action: Action) => {
  switch (action.type) {
    case MESSAGE_INIT:
      return action.payload
    case MESSAGE_UPDATE:
      return [
        ...state,
        ...action.payload
      ]
    default:
      return [...state]
  }
}
