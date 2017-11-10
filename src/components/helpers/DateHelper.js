import moment from 'moment';

export const formatDate = function(date) {
  return moment(date).format('YYYY-MM-DD');
};
