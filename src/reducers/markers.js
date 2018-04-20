import { CREATE_MARKER } from '../actions/create'
import { FETCH_MARKERS } from '../actions/fetch'
import { UPDATED_MARKER } from '../actions/update'
import { DELETE_MARKER } from '../actions/delete'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_MARKERS :
      return [...payload]

    case CREATE_MARKER :
      const newMarker = {...payload}
      return [newMarker].concat(state)

    case UPDATED_MARKER :
      return state.map((marker) => {
          if (marker.id === payload.id) {
            return {...payload }
          }
          return marker
        })

      case DELETE_MARKER :
        return state.filter((marker) => (marker.id !== payload.id))


    default :
      return state

  }
}
