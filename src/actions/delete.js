export const DELETE_MARKER = 'DELETE_MARKER'


export default (deleteMarker) => {
  return (dispatch) => {
    dispatch({ type: DELETE_MARKER, payload: deleteMarker })
  }
}
