import React from 'react';

const Post = ({location, match}) => {
    console.log('post', match);
    return (
        <p>
            Post #{match.params.id}
        </p>
    )
}

export default Post;