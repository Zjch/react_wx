import { HANDLE_TAB_HIDDEN } from "./actionTypes";

const defaultState = {
    tabHidden: false,
}

export default (state = defaultState, action) => {
    if (action.type === HANDLE_TAB_HIDDEN) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.tabHidden = action.value
        return newState
    }
    return state
}