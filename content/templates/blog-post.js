import React from 'react';

import Layout from './layout';

const BlogPostTemplate = props => {
  const { article } = props.pageContext;

  return (
    <Layout location={props.location} title="Matcha & Mochi">
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        {article.title}
      </h1>
      <p
        style={{
          textAlign: 'center',
        }}
      >
        {new Date(article.publishedDate || article.created).toDateString()}
      </p>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </Layout>
  );
};

export default BlogPostTemplate;