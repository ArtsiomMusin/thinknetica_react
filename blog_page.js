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
    obj.meta.likes_count += 1; // wtf I wrote here?
    this.setState({ count: obj.meta.likes_count});
  }
  render() {
    const {items} = this.props;
    const piechart_data = _.map(
      items,
      (item) => [
        item.text, item.meta.likes_count
      ]);
    return DOM.div(
        null,
        React.createElement(BlogList, {items: items, like: this.like}),
        <PieChart columns={piechart_data}/>,
      );

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
