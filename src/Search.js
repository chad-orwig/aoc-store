import React from 'react';
import Form from 'react-bootstrap/Form';
import { string, func } from 'prop-types';


function Search({search, setSearch}){
    const changeHandler = (e) => setSearch(e.target.value);
    return (
        <Form.Control value={search} onChange={changeHandler} type="text" placeholder="Search items"></Form.Control>
    )
}

Search.propTypes = {
    search: string,
    setSearch: func.isRequired
}

export default Search;