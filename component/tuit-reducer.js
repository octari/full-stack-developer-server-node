import {CREATE_TUIT, DELETE_TUIT, UPDATE_TUIT, FIND_ALL_TUITS }
    from "./tuits-actions";


const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case UPDATE_TUIT:
            return state.map(tuit =>
                                 tuit._id === action.tuit._id ? action.tuit : tuit
            );
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [
                ...state,
                action.newTuit
            ];
        default:
            return state
    }
}

export default tuitsReducer;