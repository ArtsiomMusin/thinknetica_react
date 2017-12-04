import React from 'react';
import PropTypes from 'prop-types';

import { PageHeader, Well } from 'react-bootstrap';
import Link from 'components/elements/Link';

const MainLayout = ({children}) => (
  <div className="container">
    <Logo />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <PageHeader>
    <Link to='/'>Thinknetica Blog by Artem</Link>
    <About />
  </PageHeader>
);

const Footer = () => (
  <Well>
    <span>Powered by some cool company</span>
    <div style={{float: 'right'}}><Link to='/contact'>Contact Us</Link></div>
  </Well>
);

const About = () => (
  <div style={{float: 'right'}}>
    <Link to='/about'>
      <span className="glyphicon glyphicon-question-sign" />
    </Link>
  </div>
);
