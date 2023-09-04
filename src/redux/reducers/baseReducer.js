import {  } from '../constants'
import createReducer from '../createReducer'

const initialState = {
  loading: false
}

export default function baseReducer(state = initialState, action) {
  switch(action.type) {
    default: { return state }
  }
}