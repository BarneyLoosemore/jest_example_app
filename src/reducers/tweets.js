import { SAVE_TWEET } from 'actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case SAVE_TWEET:
            return [...state, action.payload]
        default:
            return state
    }
}