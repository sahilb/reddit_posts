var model =  require('./data.json')

const {data} = model;
const {children} = data;

const posts = children.map(child => {
    const {data} = child;
    const {is_video, media, media_embed, num_comments, title, url, thumbnail, permalink} = data;
    return {is_video, media, media_embed, num_comments, title, url, thumbnail, permalink}
})
const one = posts[0]

export default  {posts, one};