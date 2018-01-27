import React from 'react';

export default class Row extends React.Component {
    splitTitle() {
        var title = this.props.post.title;

        if (title.length > 200) {
            title = title.slice(0, 200);
            title = title + '...'
        }
        var words = title.split(' ');
        var lines = [];
        var prev = ''
        const totalLength = title.length;

        words.forEach(word => {
            if (word.length + prev.length > 75) {
                lines.push(prev);
                prev = '';
            }
            prev += (word + ' ');
        })
        lines.push(prev);


        return lines;

    }
    render() {
        const { post } = this.props;
        const url = "https://www.reddit.com" + post.permalink;
        return (
            <div className="row" key={post.id}>
                <div className="thumbnail row-section">
                    <img alt="thumbnail" src={post.thumbnail} height={60} width={80} />
                </div>
                <div className="favorite-icon row-section"></div>
                <div className="row-section" >
                    <a href={url} target="_blank" className="links">
                        <div className="title">
                            {this.splitTitle().map((line, i) => {
                                return <div key={'lineid-' + i}>{line}</div>
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
