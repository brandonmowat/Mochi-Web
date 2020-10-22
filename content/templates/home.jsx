/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';

import Layout from './layout';

import '../style.css';

const BlogIndex = props => {
  const { pageContext } = props;
  const { articles } = pageContext;
  articles.sort((a, b) => (new Date(a.publishedDate || a.created) < new Date(b.publishedDate || b.created) ? 1 : -1));

  if (!articles || !articles.length) {
    return <div>no posts</div>;
  }

  const firstArticle = articles[0];

  const restArticles = articles.slice(1);

  return (
    <Layout location="/" title="Macha & Mochi">
      <div className="row">
        <span className="LatestPostLabel">Latest Post</span>
      </div>

      <Link className="Post FeaturedArticle" to={`article/${firstArticle.id}`}>
        <section>
          <div className="row">
              <h3>{firstArticle.title}</h3>
              <p className="FeaturedArticle__date">
                {new Date(firstArticle.publishedDate || firstArticle.created).toDateString()}
              </p>
              <p>{firstArticle.description}</p>
          </div>
        </section>
      </Link>

      <br></br>
      <br></br>

      <div className="row">
        <span>Older Posts</span>
      </div>

      {restArticles.map(article => (
        <Link className="Post" to={`article/${article.id}`}>
          <div className="row">
              
              <h3>{article.title}</h3>
              <p className="Post__date">
                {new Date(article.publishedDate || article.created).toDateString()}
              </p>
              <p>{article.description}</p>
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export default BlogIndex;