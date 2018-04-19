export const UPDATED_MARKER = 'UPDATED_MARKER'


export default (saveMarker) => {
  return (dispatch) => {
    dispatch({ type: UPDATED_MARKER, payload: saveMarker })
  }
}
