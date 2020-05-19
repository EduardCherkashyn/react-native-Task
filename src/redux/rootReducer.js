import {LOAD_IMAGES} from "../Images/types";

export function rootReducer(state, action) {
    switch (action.type) {
        case LOAD_IMAGES:
            return Object.assign({}, state, {
                items: action.posts
            });
        default:
            return state
    }
}
