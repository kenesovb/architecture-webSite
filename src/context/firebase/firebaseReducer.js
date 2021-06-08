import { GET_TEXT, SHOW_LOADER } from "../types"

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading:true}),
    [GET_TEXT]: (state, {payload}) => ({...state, text: payload, loading: false}),
    
    DEFAULT: state => state
}

export const firebaseReducer = (state,action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}