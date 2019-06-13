

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://www.reddit.com/r/aww.json?raw_json=1');

    const contentType = store.addContentType({
      typeName: 'RedditPost',
      route: '/reddit/:id'
    });

    for (const post of data.data.children) {
      contentType.addNode({
        id: post.data.id,
        title: post.data.title,
        path: `/reddit/${post.data.id}`,
        fields: {
          thumbnail:post.data.thumbnail,
          img: post.data.preview.images[0].source.url
        }
      });
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};