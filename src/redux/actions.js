import { SET_DEVELOPER_MODE, SET_DIMENSIONS } from './constants'

// Initial Settings
export function setDeveloperMode(developerMode) {
  return {
    type: SET_DEVELOPER_MODE,
    developerMode,
  }
}
export function setDimensions(dimensions) {
  return {
    type: SET_DIMENSIONS,
    dimensions
  }
}

// Dev/debug action
export function dispatch(type, params) {
  return {
    type,
    params,
  }
}