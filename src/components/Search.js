import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/Alert/alertContext";
import {GithubContext} from "../context/GitHub/githubContext";

const Search = props => {

  const {show, hide} = useContext(AlertContext);
  const [value, setValue] = useState('');
  const {search, clearUsers} = useContext(GithubContext);

  const onSubmit = event => {
    if (event.key !== "Enter") {
      return;
    }

    if (value.trim()) {
      hide();
      search(value.trim());
    } else {
      clearUsers();
      show('Please type the name of the user!');
    }
  };

return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Type the name of the user..."
        onKeyPress={onSubmit}
        onChange={e => setValue(prev => prev = e.target.value)}
        value={value}/>
    </div>
    )
}

export default Search