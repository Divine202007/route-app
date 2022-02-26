import React from 'react'
import MovieCard from './MovieCard'
import { useState } from 'react';

export default function Filter(props) {

    const { movies } = props;

    const [filter, setFilter] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value;
        setFilter(value);
    }

    return (
        <>
            <div>
                <input 
                    type="text"
                    placeholder='Search box...'
                    className='search-box'
                    onChange={ handleSearch }
                />
            </div>
            
            <div>
                {movies
                    .filter((movie) =>
                    movie.title.toLowerCase().includes(filter.toLowerCase()))
                    .sort((a, b) => b.id - a.id)
                    .map((movie) => ( <MovieCard movie={movie} key={movie.id} />))}
            </div>
        </>
    )
}
