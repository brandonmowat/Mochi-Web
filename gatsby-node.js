require(`dotenv`).config({
  path: `.env`,
})

const axios = require('axios');

const get = endpoint =>
  axios.get(`${process.env.API_ROOT}${endpoint}`);

exports.createPages = async ({ actions: { createPage } }) => {
  const { data: articles } = await get('articles/');

  let publishedArticles = articles;

  // omit post if labeled a draft in production
  if (!(process.env.NODE_ENV === 'development')) {
    publishedArticles = publishedArticles.filter(
      article => article.isPublished
    );
  }

  // Create a page that lists all Articles
  createPage({
    path: '/',
    component: require.resolve('./content/templates/home.jsx'),
    context: { articles: publishedArticles },
  });

  // // Create a page for each post.
  publishedArticles.forEach(article => {
    // console.log(article)
    createPage({
      path: `/article/${article.id}/`,
      component: require.resolve('./content/templates/blog-post.js'),
      context: { article },
    });
  });
};