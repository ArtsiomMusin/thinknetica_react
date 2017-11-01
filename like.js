const Like = ({count, like}) => (
  DOM.div(
    null,
    count != 0 && DOM.span(null, `Likes: ${count}`),
    DOM.button({onClick: like}, 'Like')
  )
);

Like.propTypes = {
  count: PropTypes.number
};

Like.defaultProps = {
  count: 0
};
