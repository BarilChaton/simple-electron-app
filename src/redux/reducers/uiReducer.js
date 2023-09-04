import { SET_DIMENSIONS } from '../constants'
import createReducer from '../createReducer'

const initialState = {

}

export default function uiReducer(state = initialState, action) {
  switch(action.type) {
    case SET_DIMENSIONS: {
      const { dimensions } = action
      return createReducer(state, { dimensions })
    }

    default: { return state }
  }
}