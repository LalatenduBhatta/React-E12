let initialValue = 100
function countReducer(state = initialValue, action) {
    switch (action.type) {
        case "increment":
            return state + 10;
        case "decrement":
            return state - 1;
        case "update":
            return state + action.payload
        default:
            return state
    }
}

export default countReducer