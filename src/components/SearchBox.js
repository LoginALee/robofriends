import React, { Fragment }  from "react";

const SearchBox = ({ searchChange }) =>{
    return(
        <Fragment>
            <input onChange={searchChange} className='pa3 ba b--green bg-lightest-blue' type="search" placeholder="search robots..."/>
        </Fragment>
    )
}

export default SearchBox;