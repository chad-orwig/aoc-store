import React from 'react';
import Form from 'react-bootstrap/Form';
import ControlPanel from './ControlPanel';
import { string, func } from 'prop-types';


function Search({search, setSearch}){
    const changeHandler = (e) => setSearch(e.target.value);
    return (
        <div>
            <Form.Control value={search} onChange={changeHandler} type="text" placeholder="Search items"></Form.Control>
        </div>
    )
}

ControlPanel.propTypes = {
    search: string,
    setSearch: func.isRequired
}

export default Search;