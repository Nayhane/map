export const FETCH_MARKER = 'FETCH_MARKER'


export default (markers) => {
  return (dispatch) => {
    dispatch({ type: FETCH_MARKER, payload: markers })
  }
}
