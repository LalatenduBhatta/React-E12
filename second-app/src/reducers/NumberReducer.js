function numberReducer(state, action) {
    //logic to update the state
    if (action.type == "inc") {
        return state + action.payload
    }
    else if (action.type == "dec") {
        return state - action.payload
    } else {
        return state
    }
}

export default numberReducer