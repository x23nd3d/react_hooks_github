import React, {useContext, useEffect} from 'react';
import {GithubContext} from "../context/GitHub/githubContext";
import {Link} from "react-router-dom";
import Repos from "../components/Repos";

const Profile = ({match}) => {

  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
  console.log('User', user)
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
  // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Loading...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos,
    public_gists
  } = user;

  return (
    <>
      <Link to="/" className="btn btn-link">Go to main page</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url}
                   alt={name}
                   style={{width: '250px'}} />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              }
              <a
                href={html_url}
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-dark">Open profile</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}

                {company && <li>
                  <strong>Company: </strong> {company}
                </li>}

                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>
              <div className="badge badge-primary" style={{backgroundColor:"blue"}}>Followers: {followers}</div>
              <div className="badge badge-success" style={{backgroundColor:"lightgreen"}}>Following: {following}</div>
              <div className="badge badge-info" style={{backgroundColor:"darkcyan"}}>Repositories: {public_repos}</div>
              <div className="badge badge-dark" style={{backgroundColor:"gray"}}>Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos}/>
    </>
  )
}

export default Profile;