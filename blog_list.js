class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return DOM.ul(
      null,
      _.map(
        this.props.items,
        (item, key) => (
          DOM.li(
            {key},
            React.createElement(
              BlogItem,
              {
                image: item.image,
                text: item.text,
                meta: item.meta,
                like: this.props.like,
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
