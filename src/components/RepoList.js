import React, { useState } from 'react';

const RepoList = (props) => {

    return (
        <div>
            {props.repos && props.repos.map((item, id) =>
                <div key={id}>
                    <a>{item.full_name}</a>
                    <a>{item.description}</a>
                </div>
            )}
        </div>
    );
}

export default RepoList;