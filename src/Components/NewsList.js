import React from 'react';
class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsObject: [],
    };
  }

  //   const news = props.ids.map(news => {
  //   fetch(`https://hacker-news.firebaseio.com/v0/item/${news}.json`)
  //   .then(res => res.json())
  //   .then(data => this.setState(...this.state.newsObject: data))
  // })

  render() {
    return (
      <p>Hello</p>
    );
  }
}

export default NewsList;
