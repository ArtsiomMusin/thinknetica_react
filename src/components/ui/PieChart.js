import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
let c3;

class PieChart extends React.Component {
  componentDidMount() {
    c3 = require('c3');
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.props.columns,
        type: this.props.type
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(newProps) {
    this.chart.unload();
    this.chart.load({
      columns: newProps.columns
    });
  }

  render() {
    return (
      <div ref='chart' />
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array,
  type: PropTypes.string
};


PieChart.defaultProps = {
  type: 'pie'
};

export default PieChart;
