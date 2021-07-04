import * as actionTypes from "./actionTypes"

export const getRepos = (props) => ({
    type: actionTypes.GET_REPOS,
    payload: props
})