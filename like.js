const Like = ({count, like, id}) => (
  DOM.div(
    null,
    count != 0 && DOM.span(null, `Likes: ${count}`),
    DOM.button({onClick: () => like(id)}, 'Like')
  )
);

Like.propTypes = {
  count: PropTypes.number
};

Like.defaultProps = {
  count: 0
};
