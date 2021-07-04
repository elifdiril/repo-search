import React, { useState } from 'react';
import '../styles/user.css';

const UserList = (props) => {
    let usrList = [props.users.payload];
    return (
        <div>
            {props && props.users && usrList.map((item, id) =>
                <div key={id}>
                    <div className="item-div">
                        <img className="Ellipse-1" src={item.avatar_url} />
                        <div className="sa-Tan">{item.name}</div>
                    </div>
                    <div className="Lead-Developer-digieggs ">{item.bio}</div>
                </div>
            )}
        </div>
    );
}

export default UserList;