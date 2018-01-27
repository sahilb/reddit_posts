import React from 'react';

export default class Row extends React.Component {
    splitTitle() {

        var words = this.props.post.title.split(' ');
        var lines = [];
        var prev = ''
        words.forEach(word => {
            if (word.length + prev.length > 65) {
                lines.push(prev);
                prev = ''
            } else {
                prev += (word + ' ');
            }
        })
        lines.push(prev);
        return lines;

    }
    render() {
        const { post } = this.props;
        const url =  "https://www.reddit.com" + post.permalink;
        return (
            <div className="row" key={post.id}>
                <div className="thumbnail row-section">
                    <img alt="thumbnail" src={post.thumbnail} height={60} width={80} />
                </div>
                <div className="favorite-icon row-section"></div>
                <div className="row-section" >
                    <a href={url} target="_blank" class="links">
                    <div className="title">
                        {this.splitTitle().map(line => {
                            return <div>{line}</div>
                        })}
                    </div>
                    </a>
                    <div className="comments">
                        {post.num_comments} comments
                    </div>
                </div>
            </div>
        )
    }
}
