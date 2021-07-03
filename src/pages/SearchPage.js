import React, { useState } from 'react';
import UserList from '../components/UserList';
import RepoList from '../components/RepoList';
import '../styles/search.css';

const SearchPage = () => {
    const [userName, setUserName] = useState("");
    const [repos, setRepos] = useState([]);
    const [users, setUsers] = useState([]);
    const [bookmarks, setBookmark] = useState([]);

    const getRepos = userName => {
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(response => response.json())
            .then(response => {
                setRepos(response);
            })
    }

    const getUsers = userName => {
        fetch(`https://api.github.com/users/${userName}`)
            .then(response => response.json())
            .then(response => {
                setUsers([response]);
            })
    }

    const getReposAndUsers = input => {
        getRepos(input);
        getUsers(input)
    }

    const userNameOnChange = e => {
        setUserName(e.target.value)
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
                            <li><a href="#">Repositories</a></li>
                            <li><a href="#">Users</a></li>
                            <li><a href="#">Bookmarked</a></li>
                            <div className="Rectangle-3"></div>
                        </ul>
                    </nav>

                    <article>
                        <div>
                            <UserList users={users} />
                        </div>
                        <div>
                            <RepoList repos={repos} />
                        </div>
                        
                    </article>
                </section>
            </body>
        </div>
    );
}

export default SearchPage;