import React, { Component } from 'react';
import Comment from './Comment.js';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsItems: [],
    };
  }

  componentWillMount() {
    if (this.props.comments != null) {
      for (let item of this.props.comments) {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
          .then(res => res.json())
          .then(data => {

            if (this.state.commentsItems.length < 2) {

              const allComments = this.state.commentsItems.concat([data]);
              this.setState({ commentsItems: allComments });
            }  });

      }
    }
  }

  render() {

    return (

      <li>

        <a href={this.props.url}>{this.props.title}</a>
        <Comment comments={this.state.commentsItems}/>
        </li>
    );

  }
};

export default Article;
