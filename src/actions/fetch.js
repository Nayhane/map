export const FETCH_MARKERS = 'FETCH_MARKERS'

export default (markers) => {
  return (dispatch) => {
    dispatch({ type: FETCH_MARKERS, payload: markers })
  }
}
