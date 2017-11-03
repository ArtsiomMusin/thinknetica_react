class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return DOM.ul(
      null,
      _.map(
        this.state.items,
        (item, key) => (
          DOM.li(
            {key},
            React.createElement(
              BlogItem,
              {
                image: item.image,
                text: item.text,
                meta: item.meta,
                like: this.state.like,
                id: item.id
              }
            )
          )
        )
      )
    )
  }
}

BlogList.propTypes = {
  items: PropTypes.array
};

BlogList.defaultProps = {
  items: []
};

ReactDOM.render(
  React.createElement(BlogList, {items: threeItems}),
  document.getElementById("bloglist")
);
