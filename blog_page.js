class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.like = _.bind(this.like, this);
  }

  like(id) {
    var obj = _.find(this.state.items, ['id', id]);
    if(!obj.meta.likes_count){
      obj.meta.likes_count = 0;
    }
    obj.meta.likes_count += 1;
    this.setState({ count: obj.meta.likes_count});
  }
  render() {
    return React.createElement(BlogList, {items: this.state.items, like: this.like})
  }
}

ReactDOM.render(
  React.createElement(BlogPage, {items: threeItems}),
  document.getElementById("blogpage")
);

BlogPage.propTypes = {
  items: PropTypes.array
};


BlogPage.defaultProps = {
  items: []
};
