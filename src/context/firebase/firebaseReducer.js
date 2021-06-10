import { GET_HOME_PAGE_DATA,GET_LINKS, SHOW_LOADER } from "../types"

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading:true}),
    [GET_HOME_PAGE_DATA]: (state, {payload}) => ({...state, text: payload, loading: false}),
    [GET_LINKS]: (state, {payload}) => ({...state, links: payload}),
    DEFAULT: state => state
}

export const firebaseReducer = (state,action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}