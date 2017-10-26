const DOM = React.DOM;

// Image component
const Image = ({src, width, height, alt}) => (
  DOM.img({src, width, height, alt})
);

ReactDOM.render(
  React.createElement(
    Image,
    {
      src: "https://goo.gl/yQ62SX",
      width: "120",
      height: "120",
      alt: "Deadly cat on unicorn, yeah!"
    }
  ),
  document.getElementById("image")
);

//TextBox component
const TextBox = ({text}) => (
  DOM.span(null, text)
);

ReactDOM.render(
  React.createElement(TextBox, {text: 'Hey there!'}),
  document.getElementById("textbox")
);

// BlogItem component
const BlogItem = ({src, text}) => (
  DOM.div(
    null,
    React.createElement(
      Image,
      {
        src: src,
        width: "50",
        height: "50",
        alt: ""
      }
    ),
    React.createElement(TextBox, {text: text})
  )
);

const three_items = [
  {
    src: "https://goo.gl/9CzY5E",
    text: "I'm a good guy"
  },
  {
    src: "https://goo.gl/J4q89x",
    text: "Flower!"
  },
  {
    src: "https://goo.gl/emZYMB",
    text: "Beeball"
  }
];
const list = _.map(three_items, (item, index) =>
  DOM.li(
    { key: index },
    React.createElement(BlogItem, {src: item.src, text: item.text})
  )
);

ReactDOM.render(
  DOM.ul(
    null,
    list
  ),
  document.getElementById("blogitem")
);

// BlogList component
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
            React.createElement(BlogItem, {src: item.src, text: item.text})
          )
        )
      )
    )
  }
}
ReactDOM.render(
  React.createElement(BlogList, {list: three_items}),
  document.getElementById("bloglist")
);
