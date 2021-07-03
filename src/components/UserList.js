import React, { useState } from 'react';

const UserList = (props) => {

    return (
        <div>
            {props.users && props.users.map((item,id) => <img width="50" height="60" src={item.avatar_url} key={id}/>)}
        </div>
    );
}

export default UserList;