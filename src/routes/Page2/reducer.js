import { produce } from 'immer'

import { ADD_PAGE2_COUNTER, SUBTRACT_PAGE2_COUNTER } from './constants'


const initialState = {
  page2Counter: 0,
}

const page1Reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action?.type) {
      case ADD_PAGE2_COUNTER:
        draft.page1Counter += 1
        break
      case SUBTRACT_PAGE2_COUNTER:
        draft.page1Counter -= 1
        break

      default:
        break
    }
  })


export default page1Reducer
