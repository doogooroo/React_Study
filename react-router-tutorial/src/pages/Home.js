import React from 'react';

const Home = ({history}) => {
    const unblock = history.block('정말로 떠나시겠습니가?');
    unblock();
    console.log('history', history);
    return (
        <div>
            <h2>Home</h2>
            <button onClick={() => { history.push('/about/jacascript')}}>
                Use javascript to move
            </button>
                
            
            <p>Hi there, It's my Home.</p>
        </div>
    )
}

export default Home;
