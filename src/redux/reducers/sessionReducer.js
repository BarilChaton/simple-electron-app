import { SET_DEVELOPER_MODE } from '../constants'
import createReducer from '../createReducer'

const initialState = {
  developerMode: true
}

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case SET_DEVELOPER_MODE: {
      const { developerMode } = action
      return createReducer(state, { developerMode })
    }

    default: { return state }
  }
}