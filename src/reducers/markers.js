import { CREATE_MARKER } from '../actions/create'
import { FETCH_MARKERS } from '../actions/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_MARKERS :
      return [...payload]


    case CREATE_MARKER :
      const newMarker = {...payload}
      return [newMarker].concat(state)

    default :
      return state

  }
}
