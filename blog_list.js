class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return DOM.ul(
      null,
      _.map(
        this.state.list,
        (item, key) => (
          DOM.li(
            {key},
            React.createElement(
              BlogItem,
              {
                src: item.src,
                text: item.text,
                author: item.author,
                created: item.created,
                updated: item.updated
              }
            )
          )
        )
      )
    )
  }
}

BlogList.propTypes = {
  list: PropTypes.array
};


BlogList.defaultProps = {
  list: []
};

ReactDOM.render(
  React.createElement(BlogList, {list: three_items}),
  document.getElementById("bloglist")
);
