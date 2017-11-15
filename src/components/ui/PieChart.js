import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import c3 from 'c3';

class PieChart extends React.Component {
  componentDidMount() {
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
  columns: [['data1', 30], ['data2', 50]],
  type: 'pie'
};

export default PieChart;
