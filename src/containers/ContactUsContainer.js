import { connect } from 'react-redux';
import ContactUsPage from 'components/containers/ContactUsPage';
import { sendContactMessage } from 'actions/ContactUs';


const mapDispatchToProps = (dispatch) => (
  {
    sendData: (data) => {
      dispatch(sendContactMessage(data));
    }
  }
);

export default connect(null, mapDispatchToProps)(ContactUsPage);
