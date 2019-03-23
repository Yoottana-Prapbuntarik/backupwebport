export default (state = [], action) => {
    switch (action.type) {

        case "EditID":
            return {
                ...state,
                getId: action.newId,
            }



        default:
            return state
    }
}
