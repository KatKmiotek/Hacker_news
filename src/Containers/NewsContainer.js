import React from 'react';
import NewsList from '../Components/NewsList.js';

class NewsConatainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        newsIds: [],
        news: [],
        currentItem: [],
      };
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(res => res.json())
    .then(data => {
      for (let item of data) {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
          .then(res => res.json())
          .then(data => {
            const allArticles = this.state.news.concat([data]);
            this.setState({ news: allArticles });
          });
      }
    });

  }

  render() {
    return (
      <div>
<NewsList articles={this.state.news}/>
      </div>
    );
  }
}
export default NewsConatainer;
