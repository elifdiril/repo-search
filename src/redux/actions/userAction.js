import * as actionTypes from "./actionTypes"

export const getUsers = (props) => ({
    type: actionTypes.GET_USERS,
    payload: props
})