import React from 'react';
import Article from './Article.js';
const NewsList = (props) => {

  const articleList = props.articles.map((article, index) => {
    return <Article key={index + 1} index={index + 1} title ={article.title} url={article.url} comments={article.kids}/>;
  });

  return (
    <ol>{articleList}</ol>
  );

};

export default NewsList;
