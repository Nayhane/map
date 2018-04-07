export const FETCHED_MARKERS  = 'FETCHED_MARKERS '

export default (marker) => {
  return {
    type: FETCHED_MARKERS,
    payload: marker
  }
}
