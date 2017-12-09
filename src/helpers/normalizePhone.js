const normalizePhone = (value) => {
  if (!value) {
    return value;
  }

  const data = value.
    replace(/[^\d]/g, '').
    match(/(\d{1,3})?(\d{1,2})?(\d{1,3})?(\d{1,2})?(\d{1,2})?/);
  let result = '';
  if (data[1]) {
    result = `+${data[1]}`;
  }
  if (data[2]) {
    result += `(${data[2]})`;
  }
  if (data[3]) {
    result += `${data[3]}`;
  }
  if (data[4]) {
    result += `-${data[4]}`;
  }
  if (data[5]) {
    result += `-${data[5]}`;
  }
  return result;
};

export default normalizePhone;
