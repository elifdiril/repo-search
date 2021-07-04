import * as actionTypes from "../actions/actionTypes";

const userReducer = (user = [], action) => {
    let newUser = [];
    switch (action.type) {
        case actionTypes.GET_USERS:
            return (newUser = action.payload);
        default:
            return newUser;
    }
};

export default userReducer;