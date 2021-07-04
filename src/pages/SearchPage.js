import React, { useState } from 'react';
import UserList from '../components/UserList';
import RepoList from '../components/RepoList';
import '../styles/search.css';
import repoImg from '../assets/insert_drive_file.svg';
import userImg from '../assets/insert_emoticon.svg';
import bookmarkedImg from '../assets/bookmark_border.svg';
import { getRepos } from '../redux/actions/repoAction';
import { getUsers } from '../redux/actions/userAction';
import { useDispatch, useSelector } from "react-redux";

const SearchPage = () => {
    const valuesInStore = useSelector(val => val);
    const dispatch = useDispatch();

    const [userName, setUserName] = useState("");
    const [repos, setRepos] = useState(valuesInStore.repoReducer);
    const [users, setUsers] = useState(valuesInStore.userReducer);
    //const [bookmarks, setBookmark] = useState([]);
    const [chosenComponent, setChosenComponent] = useState(["repos"]);

    const _getRepos = userName => {
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(response => response.json())
            .then(response => {
                //setRepos(response);
                setRepos(dispatch(getRepos(response)));
            })
    }

    const _getUsers = userName => {
        fetch(`https://api.github.com/users/${userName}`)
            .then(response => response.json())
            .then(response => {
                //setUsers([response]);
                setUsers(dispatch(getUsers(response)));
            })
    }

    const getReposAndUsers = input => {
        _getRepos(input);
        _getUsers(input);
        chooseComponent("repos");
    }

    const userNameOnChange = e => {
        setUserName(e.target.value)
    }

    const chooseComponent = component => {
        setChosenComponent(component);
    }

    return (
        <div>
            <header>
                <input type="text" id="userName" name="userName" onChange={(userName) => userNameOnChange(userName)} />
                <button onClick={() => getReposAndUsers(userName)}>Get Repos And Users</button>
            </header>
            <body>
                <section>
                    <nav>
                        <ul>
                            <li onClick={() => chooseComponent("repos")}><img src={repoImg} alt="logo" /> <a href="#" >Repositories</a></li>
                            <li onClick={() => chooseComponent("users")}><img src={userImg} alt="logo" /> <a href="#" >Users</a></li>
                            <li><img src={bookmarkedImg} alt="logo" /> <a href="#">Bookmarked</a></li>
                            <div className="Rectangle-3"></div>
                        </ul>
                    </nav>
                    <article>
                        {chosenComponent === "users" &&
                            <div>
                                <UserList users={users} />
                            </div>}
                        {chosenComponent === "repos" &&
                            <div>
                                <RepoList repos={repos} />
                            </div>}
                    </article>
                </section>
            </body>
        </div>
    );
}

export default SearchPage;