import { FETCHED_MARKERS } from '../actions/fetch'


const points = [
  {
    title: "Apple",
    pointIcon: "https://png.pngtree.com/element_origin_min_pic/00/16/05/08572ef0dc19104.jpg",
    lat: 4.895168,
    lng: 52.370216
  },
  {
    title: "Undagrid",
    pointIcon: "http://www.fundwijzer.nl/wp-content/uploads/2017/08/133858-f854437c-9b34-43b5-b53e-fe8acf7a2b37-logo-medium-1403619985.png",
    lat: 52.293546,
    lng: 4.739897
  }
]

export default (state = points, { type, payload } = {}) => {
  switch(type) {
    case FETCHED_MARKERS :
      return payload

    default :
      return state
  }
}
