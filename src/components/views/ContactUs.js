import React from 'react';
import Helmet from 'react-helmet';
import ContactUsPage from 'components/containers/ContactUsPage';

const ContactUs = () => (
  <div>
    <ContactUsPage/>
    <Helmet title="Contact Us" />
  </div>
);

export default ContactUs;
