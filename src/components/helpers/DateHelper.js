import moment from 'moment';
const formatDate = function(date) {
  return moment(date).format('YYYY-MM-DD');
};

export default DateHelper;
