let initialValue = "black"
function colorReducer(state = initialValue, action) {
    switch (action.type) {
        case "red":
            return "#f26";
        case "green":
            return "#3e6";
        case "blue":
            return "#33e";
        case "sky":
            return "#5de";
        default:
            return state
    }
}

export default colorReducer