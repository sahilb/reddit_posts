var model = require('./data.json')

const { data } = model;
const { children } = data;

const posts = children.map(child => {
    const { data } = child;
    var { is_video, media, media_embed, num_comments, title, url, thumbnail, permalink } = data;
    if (thumbnail.indexOf('http') < 0) {
        thumbnail = 'http://localhost/workspace//reddit_posts/my-app/src/reddit_logo.png';
    }
    return { is_video, media, media_embed, num_comments, title, url, thumbnail, permalink }
})
const one = posts[0]

export default { posts, one };