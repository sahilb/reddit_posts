import React from 'react';


export default class Row extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    splitTitle(){
        var i = 0,
            len = this.state.post.title.length;
        var size = 40;
        var words = words.split(' ');

         
    }
    render() {
        const {post} = this.props;
        return (
            <div className="row" key={post.id}>
                <div className="thumbnail row-section">
                    <img src={post.thumbnail} height={80} width={100} />
                </div>
                <div className="favorite-icon row-section"></div>
                <div className="row-section">
                    <div className="title"> {post.title.slice(0,70)} </div>
                    <div className="comments">
                        {post.num_comments} comments
                    </div>
                </div>
            </div>
        )
    }
}
