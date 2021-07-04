import React, { useState } from 'react';
import bookImg from '../assets/book.svg';
import '../styles/repo.css';

const RepoList = (props) => {

    return (
        <div>
            {props && props.repos.payload &&  props.repos.payload.length > 0 &&props.repos.payload.map((item, id) =>
                <div key={id}>
                   <img src={bookImg} alt="logo" />
                    <a>{item.full_name}</a>
                    <br/>
                    <a>{item.description}</a>
                    <div className="Line-2"></div>
                </div>
            )}
        </div>
    );
}

export default RepoList;