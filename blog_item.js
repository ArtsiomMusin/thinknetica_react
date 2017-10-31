class BlogItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {image, meta, text} = this.props;
    return DOM.div(
      null,
      React.createElement(Image, { src: image.src } ),
      React.createElement(TextBox, {}, text),
      DOM.span(null, `(Written by ${meta.author})`),
      DOM.div(
        null,
        meta.created && DOM.div(null, `Created: ${meta.created}`),
        meta.updated && DOM.div(null, `Updated: ${meta.updated}`)
      ),
      React.createElement(Like, {count: meta.likes_count})
    );
  }
}
BlogItem.propTypes = {
  author: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string
};


BlogItem.defaultProps = {
  author: 'Unknown',
  created: null,
  updated: null
};

const threeItems = [
  {
    image: { src: "https://goo.gl/9CzY5E"},
    meta: {
      author: "Artem",
      created: formatDate("20120120"),
      updated: formatDate("20170720"),
      likes_count: 99
    },
    text: "I'm a good guy"
  },
  {
    image: { src: "https://goo.gl/J4q89x" },
    meta: {
      author: "Vasya",
      created: formatDate("20150320")
    },
    text: "Flower!"
  },
  {
    image: { src: "https://goo.gl/emZYMB" },
    meta: {
      updated: formatDate("19800320"),
      likes_count: 3
    },
    text: "Beeball"
  }
];
const list = _.map(threeItems, (item, index) =>
  DOM.li(
    { key: index },
    React.createElement(
      BlogItem,
      {
        image: item.image,
        text: item.text,
        meta: item.meta
      }
    )
  )
);

ReactDOM.render(
  DOM.ul(null, list),
  document.getElementById("blogitem")
);
