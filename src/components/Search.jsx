import React from 'react'

const Search = (props) => {
    return (
        <div className={`Search ${`${props.darkMode ? "Dark" : ""}-Search`}`}>
            <img className='Card-logo' src={require('./images/flower.png')} alt='logo' width={80}/>
            <input
                type="text"
                placeholder="Search for your notes..."
                onChange={(event) => props.handleSearch(event.target.value)} />
        </div>
    )
}

export default Search;