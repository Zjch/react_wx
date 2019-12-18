import { HANDLE_TAB_HIDDEN } from "./actionTypes";

// 记录scroll - 配置要监听的列表和数据  
const pageinit = {
    data: '',
    scrollTop: 0, // 高度
    isLoading: true, // true - 加载   false - 不加载
}
const pageScroll = () => ({
    home: { path: '/', ...pageinit}
})

const defaultState = {
    tabHidden: false,
    pageScroll: pageScroll()
}

export default (state = defaultState, action) => {
    if (action.type === HANDLE_TAB_HIDDEN) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.tabHidden = action.value
        return newState
    }
    return state
}