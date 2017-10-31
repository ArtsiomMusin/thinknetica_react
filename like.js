class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.count};

    this.handleClick = _.bind(this.handleClick, this);
  }
  handleClick() {
    this.setState({ count: this.state.count + 1})
  }
  render () {
    const {count} = this.state;
    return DOM.div(
        null,
        count != 0 && DOM.span(null, `Likes: ${count}`),
        DOM.button({onClick: this.handleClick}, 'Like')
      );
  }
}

Like.propTypes = {
  count: PropTypes.number
};

Like.defaultProps = {
  count: 0
};
