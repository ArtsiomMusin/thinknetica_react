class BlogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;

    this.handleClick = _.bind(this.handleClick, this);
  }
  handleClick() {
    this.setState({ likes: this.state.likes + 1})
  }
  render() {
    return DOM.div(
      null,
      React.createElement(
        Image,
        {
          src: this.props.src
        }
      ),
      React.createElement(TextBox, {text: this.props.text}),
      DOM.span(null, `(Written by ${this.props.author})`),
      DOM.div(
        null,
        this.props.created && DOM.div(null, `Created: ${this.props.created}`),
        this.props.updated && DOM.div(null, `Updated: ${this.props.updated}`)
      ),
      DOM.div(
        null,
        DOM.span(null, `Likes: ${this.state.likes}`),
        DOM.button({onClick: this.handleClick}, 'Like')
      )
    );
  }
}
BlogItem.propTypes = {
  author: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string,
  likes: PropTypes.number
};

BlogItem.defaultProps = {
  author: 'Unknown',
  created: null,
  updated: null,
  likes: 0
};

const three_items = [
  {
    src: "https://goo.gl/9CzY5E",
    text: "I'm a good guy",
    author: "Artem",
    created: moment("20120120").format("YYYY-MM-DD"),
    updated: moment("20170720").format("YYYY-MM-DD")

  },
  {
    src: "https://goo.gl/J4q89x",
    text: "Flower!",
    author: "Vasya",
    created: moment("20150320").format("YYYY-MM-DD")
  },
  {
    src: "https://goo.gl/emZYMB",
    text: "Beeball",
    updated: moment("19800320").format("YYYY-MM-DD")
  }
];
const list = _.map(three_items, (item, index) =>
  DOM.li(
    { key: index },
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
);

ReactDOM.render(
  DOM.ul(null, list),
  document.getElementById("blogitem")
);
