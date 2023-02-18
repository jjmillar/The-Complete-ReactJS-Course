import React from 'react';

import { dumpLogs } from './Utils'

const BlogCard = (props) => {
    dumpLogs(props);
    return(
        <div className="BlogCard">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default BlogCard;