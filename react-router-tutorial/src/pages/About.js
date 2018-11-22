import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    const { color, bool, number } = query;

    return (
        <div>
            <h2 style={{color}}>Introduce</h2>
            <p>My name is {match.params.name}</p>
        </div>
    )
}

export default About;