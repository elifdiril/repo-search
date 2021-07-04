import * as actionTypes from "../actions/actionTypes";

const repoReducer = (repo = [], action) => {
    let newRepo = [];
    switch (action.type) {
        case actionTypes.GET_REPOS:
            return (newRepo = action.payload);
        default:
            return newRepo;
    }
};

export default repoReducer;