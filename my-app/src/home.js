import React from 'react';
import Row from './Row';

import data from './hot.js';

const log = console.log.bind(console);
log(data.one);
var {posts} = data;


export default class Home extends React.Component {
    render() {
        return (
            <div>
            
                {posts.map(post => {
                    
                    // console.log(value)
                    return <Row post={post} key={post.id} />
                })}
                
            </div>
        )
    }
}
