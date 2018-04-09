export const CREATE_MARKER = 'CREATE_MARKER'


export default (newMarker) => {
  return (dispatch) => {
    dispatch({ type: CREATE_MARKER, payload: newMarker })
  }
}
